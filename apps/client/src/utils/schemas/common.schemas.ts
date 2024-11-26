import { z } from "zod";
import { AUTH_REGEXPS } from "@utils/constants/common.constants";
import { Field } from "../enums/common.enums";
import { translatedValidationMessage } from "../functions/validation/validation.messages";

export const ObjectSchema = z.object({});
export const PhoneSchema = z
  .string()
  .min(1, translatedValidationMessage("phone.empty"))
  .min(5, translatedValidationMessage("phone.min"))
  .max(12, translatedValidationMessage("phone.invalid"));

export const EmailSchema = z
  .string()
  .min(1, translatedValidationMessage("email.empty"))
  .email(translatedValidationMessage("email.invalid"));

export const PasswordSchema = z
  .string()
  .min(1, translatedValidationMessage("password.empty"))
  .min(8, translatedValidationMessage("password.min"))
  .max(20, translatedValidationMessage("password.max"));

export const LoginSchema = z
  .string()
  .min(1, translatedValidationMessage("login.empty"))
  .min(3, translatedValidationMessage("login.min"))
  .max(20, translatedValidationMessage("login.max")) // add translations
  .regex(AUTH_REGEXPS.name, translatedValidationMessage("login.char")); // add translations

export const CountryCodeSchema = z
  .string()
  .min(1, translatedValidationMessage("phoneCode.min")) // add translations
  .max(5, translatedValidationMessage("phoneCode.max")); // add translations

export const ParallelismNumberSchema = z
  .number()
  .min(1, { message: "Value must be at least 1" })
  .max(100, { message: "Value must not exceed 100" });

export const ResetPasswordSchema = z.object({
  [Field.NEW_PASSWORD]: PasswordSchema,
});

export const RecoverPasswordSchema = z.object({
  [Field.EMAIL]: EmailSchema,
});

export const ChangePasswordSchema = z.object({
  [Field.CURRENT_PASSWORD]: PasswordSchema,
  [Field.NEW_PASSWORD]: PasswordSchema,
});
