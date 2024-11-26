import { z } from "zod";
import {
  AuthRegistrationSchema,
  AuthLoginSchema,
  AuthErrorResponseSchema,
  AuthTokensSchema,
  AuthEmailVerificationSchema,
} from "../schemas/auth.schemas";

export type AuthTokensResponseType = z.infer<typeof AuthLoginSchema>;

export type RegistrationResponseType = z.infer<typeof AuthRegistrationSchema>;

export type AuthErrorResponseType = z.infer<typeof AuthErrorResponseSchema>;

export type AuthTokensType = z.infer<typeof AuthTokensSchema>;

export type AuthVerificationMessageType = z.infer<
  typeof AuthEmailVerificationSchema
>;

export type AuthResendCodeMessageType = {};
