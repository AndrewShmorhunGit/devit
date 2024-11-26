import { useFormik } from "formik";
import { LoadingButton } from "@components/Buttons/LoadingButton";
import { TextField } from "@components/TextFields/TextField";
import { Subtitle1Typography, H3Typography } from "@components/Typography";
import { Field } from "@utils/enums/common.enums";
import { useTranslation } from "react-i18next";
import {
  getTextFieldProps,
  validateEmptyFields,
} from "@utils/helpers/form.helper";
import { useState } from "react";
import { useLoginMutation } from "@store/api/auth.api";
import { toast } from "react-toastify";
import { PasswordVisibilityButton } from "@components/Buttons/PasswordVisibilityButton";
import { FlexBox } from "@styles/styled/boxes";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FieldType } from "@/hooks/usePasswordVisibility.hook";
import { Box } from "@mui/material";
import { FormContainer, StyledForm } from "../StyledAuthForm";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { PAGE_PATH } from "@/utils/constants/common.constants";
import { Link } from "@/components/Link/Link";
import {
  AuthErrorResponseType,
  AuthTokensResponseType,
} from "@/utils/types/auth.types";
import {
  LoginSchema,
  PasswordSchema,
  ObjectSchema,
} from "@/utils/schemas/common.schemas";

export const LoginFormSchema = ObjectSchema.extend({
  [Field.LOGIN]: LoginSchema,
  [Field.PASSWORD]: PasswordSchema,
});

const validationSchema = toFormikValidationSchema(LoginFormSchema);

export type LoginFormValuesType = {
  [Field.LOGIN]: string;
  [Field.PASSWORD]: string;
};

export function LoginForm() {
  const { t } = useTranslation();
  const [isVisible, setVisible] = useState(false);
  const [login, { isLoading }] = useLoginMutation();

  const initialValues: LoginFormValuesType = {
    [Field.LOGIN]: "",
    [Field.PASSWORD]: "",
  };

  const formikHook = useFormik<LoginFormValuesType>({
    validationSchema,
    validate: validateEmptyFields([Field.LOGIN, Field.PASSWORD]),
    initialValues,
    onSubmit: async (values) => {
      try {
        const response = await login({
          username: values[Field.LOGIN],
          password: values[Field.PASSWORD],
        }).unwrap();

        if ("token" in (response as AuthTokensResponseType))
          toast.success(t("toasts.login.success"));
        if ("error" in (response as AuthErrorResponseType))
          toast.error(t("toasts.login.error"));
      } catch (error: any) {
        const errorMessage = error.message || t("toasts.connectionError");
        toast.error(errorMessage);
      }
    },
  });

  return (
    <FormContainer>
      <StyledForm onSubmit={formikHook.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <H3Typography sx={{ textAlign: "center" }}>
            {t("authForm.login.header")}
          </H3Typography>
        </Box>
        <TextField
          {...getTextFieldProps({ field: Field.LOGIN, formikHook, t })}
          icon={<PersonIcon />}
        />
        <TextField
          type={isVisible ? FieldType.TEXT : FieldType.PASSWORD}
          {...getTextFieldProps({ field: Field.PASSWORD, formikHook, t })}
          icon={<LockIcon />}
          button={
            <PasswordVisibilityButton
              isVisible={isVisible}
              toggleVisibility={() => setVisible(!isVisible)}
            />
          }
        />
        <FlexBox>
          <LoadingButton
            isLoading={isLoading}
            type="submit"
            disabled={!formikHook.isValid || !formikHook.dirty}
          >
            {t("authForm.login.button")}
          </LoadingButton>
        </FlexBox>
        <FlexBox>
          <Subtitle1Typography>
            {t("authForm.login.footerText") + " "}
            <Link to={PAGE_PATH.register}>
              {t("authForm.login.footerLink")}
            </Link>
          </Subtitle1Typography>
        </FlexBox>
      </StyledForm>
    </FormContainer>
  );
}
