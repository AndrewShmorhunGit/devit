import React from "react";
import { useTimer } from "@/components/Timer/Timer";
import { useTranslation } from "react-i18next";
import { EMAIL_VERIFICATION_CODE_EXPIRATION } from "@/utils/constants/common.constants";
import {
  useEmailConfirmMutation,
  useResendCodeMutation,
} from "@/store/api/auth.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export type ResendCodeValuesType = { login: string };

export type EmailVerificationFormValuesType = ResendCodeValuesType & {
  confirmationCode: string;
};

export function useEmailVerification(
  email: string | null,
  login: string | null
) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [code, setCode] = React.useState<string[]>(Array(6).fill(""));
  const [timerRunning, setTimerRunning] = React.useState(true);
  const [emailConfirm, { isLoading: isConfirmLoading }] =
    useEmailConfirmMutation();
  const [resendCode, { isLoading: isResendLoading }] = useResendCodeMutation();

  const [isTimerActive, seconds] = useTimer({
    timerRunning,
    setTimerRunning,
    email: email || "",
    time: EMAIL_VERIFICATION_CODE_EXPIRATION,
  });

  const username = login || "";
  const isCodeComplete =
    code.every((digit) => digit !== "") && code.length === 6 && isTimerActive;

  React.useEffect(() => {
    const savedTimestamp = localStorage.getItem(`timer_${email}`);

    if (savedTimestamp) return;

    localStorage.setItem(`timer_${email}`, Date.now().toString());
  }, []);

  const handlePaste = React.useCallback(
    (
      e: React.ClipboardEvent<HTMLInputElement>,
      inputRefs: React.MutableRefObject<HTMLInputElement[]>
    ) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData("Text")
        .slice(0, 6)
        .split("")
        .filter((char) => /\d/.test(char));

      setCode((prevCode) => {
        const newCode = [...prevCode];
        pastedData.forEach((char, index) => {
          newCode[index] = char;
          if (inputRefs.current[index]) inputRefs.current[index].value = char;
        });
        return newCode;
      });
    },
    []
  );

  const handleChange = React.useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number,
      inputRefs: React.MutableRefObject<HTMLInputElement[]>
    ) => {
      const value = e.target.value.replace(/\D/g, "");
      setCode((prevCode) => {
        const newCode = [...prevCode];
        newCode[index] = value;
        return newCode;
      });

      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    },
    []
  );

  const handleKeyDown = React.useCallback(
    (
      e: React.KeyboardEvent<HTMLInputElement>,
      index: number,
      inputRefs: React.MutableRefObject<HTMLInputElement[]>
    ) => {
      if (e.key === "Backspace") {
        setCode((prevCode) => {
          const newCode = [...prevCode];
          if (newCode[index] === "" && index > 0) {
            newCode[index - 1] = "";
            inputRefs.current[index - 1].focus();
          } else {
            newCode[index] = "";
          }
          return newCode;
        });
      }
    },
    []
  );

  const handleSubmit = React.useCallback(async () => {
    try {
      const response = await emailConfirm({
        login: username,
        confirmationCode: code.join(""),
      }).unwrap();

      if ("message" in response) {
        toast.success(t("toasts.confirm.success"));
        navigate(`/login`);
      } else if ("error" in response) {
        toast.error(t("toasts.confirm.error"));
      }
    } catch (error) {
      console.error("Error during email confirmation:", error);
      toast.error(t("toasts.confirm.error"));
    }
  }, [code, username, t, navigate]);

  const handleResendCode = React.useCallback(async () => {
    try {
      const response = await resendCode({
        login: username,
      }).unwrap();

      if ("message" in response) {
        toast.success(t("toasts.resend.success"));
        localStorage.setItem(`timer_${email}`, Date.now().toString());
        setTimerRunning(true);
      } else if ("error" in response) {
        toast.error(t("toasts.resend.error"));
      }
    } catch (error) {
      console.error("Error during code resend:", error);
      toast.error(t("toasts.resend.error"));
    }
  }, [email, username, t, setTimerRunning]);

  return {
    isResendLoading,
    isConfirmLoading,
    code,
    isTimerActive,
    seconds,
    isCodeComplete,
    handlePaste,
    handleChange,
    handleKeyDown,
    handleSubmit,
    handleResendCode,
    t,
  };
}
