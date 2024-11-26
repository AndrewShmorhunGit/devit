import { Field } from "@/utils/enums/common.enums";
import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FormContainer, StyledForm } from "../StyledAuthForm";
import { Box } from "@mui/material";
import { Subtitle1Typography, H3Typography } from "@/components/Typography";
import { TextField } from "@/components/TextFields/TextField";
import {
  getTextFieldProps,
  validateEmptyFields,
} from "@/utils/helpers/form.helper";
import { FieldType } from "@/hooks/usePasswordVisibility.hook";
import { PasswordVisibilityButton } from "@/components/Buttons/PasswordVisibilityButton";
import { FlexBox } from "@/styles/styled/boxes";
import { LoadingButton } from "@/components/Buttons/LoadingButton";
import { Link } from "@/components/Link/Link";
import { PAGE_PATH } from "@/utils/constants/common.constants";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { LoginFormValuesType, LoginFormSchema } from "../Login/Login";
import { useRegisterMutation } from "@/store/api/auth.api";
import { toast } from "react-toastify";
import { AuthErrorResponseType } from "@/utils/types/auth.types";
import { useNavigate } from "react-router-dom";
import { EmailSchema, PhoneSchema } from "@/utils/schemas/common.schemas";

const RegisterFormSchema = LoginFormSchema.extend({
  [Field.EMAIL]: EmailSchema,
  [Field.PHONE]: PhoneSchema,
});

const validationSchema = toFormikValidationSchema(RegisterFormSchema);

export type RegisterFormValuesType = {
  [Field.EMAIL]: string;
  [Field.PHONE]: string;
} & LoginFormValuesType;

export function RegisterForm() {
  const { t } = useTranslation();
  const [isVisible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const initialValues: RegisterFormValuesType = {
    [Field.LOGIN]: "",
    [Field.EMAIL]: "",
    [Field.PHONE]: "",
    [Field.PASSWORD]: "",
  };

  const formikHook = useFormik<RegisterFormValuesType>({
    validationSchema,
    validate: validateEmptyFields([
      Field.LOGIN,
      Field.PHONE,
      Field.EMAIL,
      Field.PASSWORD,
    ]),
    initialValues,
    onSubmit: async (values) => {
      const requestBody = {
        ...values,
        locale: "en",
      };

      try {
        const response = await register(requestBody).unwrap();

        if ("UserSub" in response) {
          navigate(
            `/verification?email=${encodeURIComponent(
              values[Field.EMAIL]
            )}&login=${encodeURIComponent(values[Field.LOGIN])}`
          );
          toast.success(t("toasts.register.success"));
        }

        if ("error" in (response as AuthErrorResponseType)) {
          toast.error(t("toasts.register.error"));
        }
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
            {t("authForm.register.header")}
          </H3Typography>
        </Box>
        <TextField
          icon={<PersonIcon />}
          {...getTextFieldProps({ field: Field.LOGIN, formikHook, t })}
        />
        <TextField
          icon={<EmailIcon />}
          {...getTextFieldProps({ field: Field.EMAIL, formikHook, t })}
        />
        <TextField
          icon={<PhoneIcon />}
          {...getTextFieldProps({ field: Field.PHONE, formikHook, t })}
        />
        <TextField
          icon={<LockIcon />}
          type={isVisible ? FieldType.TEXT : FieldType.PASSWORD}
          {...getTextFieldProps({ field: Field.PASSWORD, formikHook, t })}
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
            {t("authForm.register.button")}
          </LoadingButton>
        </FlexBox>
        <FlexBox>
          <Subtitle1Typography>
            {t("authForm.register.footerText")}
            <Link to={PAGE_PATH.login}>
              {t("authForm.register.footerLink")}
            </Link>
          </Subtitle1Typography>
        </FlexBox>
      </StyledForm>
    </FormContainer>
  );
}
