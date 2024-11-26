import { FC } from "react";
import { AuthFormVariant } from "@/utils/enums/common.enums";
import { LoginForm } from "./Login/Login";
import { RegisterForm } from "./Register/Register";
import { EmailVerificationForm } from "./EmailVerification/EmailVerification";

type AuthFormProps = {
  variant: AuthFormVariant;
};

export const AuthForm: FC<AuthFormProps> = ({ variant }) => {
  const form = (() => {
    switch (variant) {
      case AuthFormVariant.LOGIN:
        return <LoginForm />;
      case AuthFormVariant.REGISTRATION:
        return <RegisterForm />;
      case AuthFormVariant.EMAIL_VERIFY:
        return <EmailVerificationForm />;
    }
  })();

  return form;
};
