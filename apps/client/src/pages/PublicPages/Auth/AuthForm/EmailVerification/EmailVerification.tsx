import React, { useRef } from "react";
import { Box } from "@mui/material";
import { LoadingButton } from "@components/Buttons/LoadingButton";
import { useLocation } from "react-router-dom";
import { Timer } from "@/components/Timer/TimerUI.styles";
import { Body2Typography, H3Typography } from "@/components/Typography";
import { useEmailVerification } from "./hook/useEmailVerification";
import {
  ButtonContainer,
  CodeInputContainer,
  VerificationFormContainer,
  ResendPrompt,
  CodeDigitField,
} from "./StyledEmailVerification";
import { FormContainer } from "../StyledAuthForm";
import { formatSeconds } from "@/utils/helpers/date.helpers";

export function EmailVerificationForm() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  const login = searchParams.get("login");

  const inputRefs = useRef<HTMLInputElement[]>([]);
  const {
    isConfirmLoading,
    isResendLoading,
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
  } = useEmailVerification(email, login);

  if (!email || !login) {
    return (
      <Body2Typography sx={{ textAlign: "center", mt: 4 }}>
        {t("authForm.verification.pleaseRegister")}
      </Body2Typography>
    );
  }

  return (
    <FormContainer>
      <VerificationFormContainer
        onSubmit={(e) => {
          e.preventDefault();
          if (isCodeComplete) handleSubmit();
        }}
      >
        <Box>
          <H3Typography sx={{ mb: 2, textAlign: "center" }}>
            {t("general.greet", { login })}
          </H3Typography>
          <Body2Typography sx={{ mb: 2, textAlign: "center" }}>
            {t("authForm.verification.verifyEmail", { email })}
          </Body2Typography>
        </Box>
        <CodeInputContainer>
          {code.map((_, index) => (
            <CodeDigitField
              key={index}
              inputRef={(el) => (inputRefs.current[index] = el!)}
              value={code[index]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, index, inputRefs)
              }
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                handleKeyDown(e, index, inputRefs)
              }
              onPaste={(e: React.ClipboardEvent<HTMLInputElement>) =>
                handlePaste(e, inputRefs)
              }
              slotProps={{
                htmlInput: {
                  maxLength: 1,
                },
              }}
              type="tel"
            />
          ))}
        </CodeInputContainer>
        <Timer $timerRunning={isTimerActive}>
          {t("authForm.verification.resendCodeAvailableIn")}{" "}
          {formatSeconds(seconds)}
        </Timer>
        {!isTimerActive && (
          <ResendPrompt variant="body2">
            {t("authForm.verification.resendPrompt")}
          </ResendPrompt>
        )}
        <ButtonContainer>
          <LoadingButton
            isLoading={isConfirmLoading}
            type="submit"
            disabled={!isCodeComplete}
          >
            {t("authForm.verification.button")}
          </LoadingButton>

          <LoadingButton
            onClick={handleResendCode}
            isLoading={isResendLoading}
            disabled={isTimerActive}
            sx={{ mb: 1 }}
          >
            {t("authForm.verification.resendCode")}
          </LoadingButton>
        </ButtonContainer>
      </VerificationFormContainer>
    </FormContainer>
  );
}
