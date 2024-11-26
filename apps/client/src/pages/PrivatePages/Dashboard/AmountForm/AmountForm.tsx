import React from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { TextField } from "@components/TextFields/TextField";
import { LoadingButton } from "@components/Buttons/LoadingButton";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { H3Typography, Subtitle1Typography } from "@components/Typography";
import { FlexBox } from "@styles/styled/boxes";
import { Field } from "@utils/enums/common.enums";
import {
  getTextFieldProps,
  validateEmptyFields,
} from "@utils/helpers/form.helper";
import {
  AmountFormSchema,
  AmountFormValuesType,
} from "@/utils/schemas/requests.schemas";

interface AmountFormProps {
  isLoading: boolean;
  onSubmit: (values: AmountFormValuesType) => void;
  onStop: () => void;
}

export const AmountForm: React.FC<AmountFormProps> = ({
  isLoading,
  onSubmit,
  onStop,
}) => {
  const { t } = useTranslation();

  // Move the validation schema inside the component to use hooks properly
  const validationSchema = React.useMemo(
    () => toFormikValidationSchema(AmountFormSchema),
    []
  );

  const formikHook = useFormik<AmountFormValuesType>({
    validationSchema,
    validate: validateEmptyFields([Field.NUMBER]),
    initialValues: { [Field.NUMBER]: 0 },
    onSubmit,
  });

  return (
    <FlexBox sx={{ flexDirection: "column", gap: 5 }}>
      <FlexBox sx={{ gap: 2 }}>
        <H3Typography sx={{ textAlign: "center" }}>
          {t("amountForm.header")}
        </H3Typography>
      </FlexBox>
      <FlexBox>
        <TextField
          type="number"
          min={1}
          {...getTextFieldProps({ field: Field.NUMBER, formikHook, t })}
          sx={{ maxWidth: "12rem" }}
        />
      </FlexBox>
      <FlexBox sx={{ gap: "1rem" }}>
        <LoadingButton
          isLoading={isLoading}
          onClick={() => formikHook.handleSubmit()}
          disabled={!formikHook.isValid || !formikHook.dirty}
        >
          {t("general.start")}
        </LoadingButton>
        <PrimaryButton disabled={!isLoading} onClick={onStop}>
          {t("general.stop")}
        </PrimaryButton>
      </FlexBox>
      <FlexBox>
        <Subtitle1Typography>{t("amountForm.footerText")}</Subtitle1Typography>
      </FlexBox>
    </FlexBox>
  );
};
