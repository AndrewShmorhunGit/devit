import { TypeOptions, TFunction } from "i18next";
import { FormikErrors, FormikHandlers, FormikValues } from "formik";
import { Field } from "../enums/common.enums";
import { translatedValidationMessage } from "../functions/validation/validation.messages";

export type FormValues = { [key: string]: string | number };
export type ErrorMessages = FormikErrors<FormValues>;

type DefaultTFuncReturn =
  | string
  | (TypeOptions["returnNull"] extends true ? null : never);

type GetTextFieldProps = {
  field: Field | string;
  formikHook: FormikValues;
  t: TFunction;
  label?: DefaultTFuncReturn;
};

type GetTextFieldPropsReturns = {
  id: string;
  name: string;
  label: string;
  value: string | number;
  error: boolean;
  onChange: FormikHandlers["handleChange"];
  helperText: string | undefined;
};

export type GetTextFieldPropsHelper = (
  props: GetTextFieldProps
) => GetTextFieldPropsReturns;
export const getTextFieldProps: GetTextFieldPropsHelper = ({
  field,
  formikHook,
  t,
  label,
}) => ({
  id: field,
  name: field,
  label: label ?? t(`fields.${field}`),
  autoComplete: field,
  value: formikHook.values[field],
  onChange: formikHook.handleChange,
  error: formikHook.touched[field] && Boolean(formikHook.errors[field]),
  helperText: formikHook.touched[field] && formikHook.errors[field],
  ...formikHook.getFieldProps(field),
});

export const validateEmptyFields =
  (fields: string[]) =>
  (values: FormValues): ErrorMessages => {
    const errors: ErrorMessages = {};

    fields.forEach((field) => {
      if (!values[field]) {
        errors[field] = translatedValidationMessage(`${field}.empty`);
      }
    });

    return errors;
  };
