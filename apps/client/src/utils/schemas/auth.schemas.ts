import { z } from "zod";

const MessageSchema = z.object({ message: z.string() });

export const AuthEmailVerificationSchema = MessageSchema;
export const AuthResendCodeMessageSchema = MessageSchema;

export const AuthRegistrationSchema = z.object({
  CodeDeliveryDetails: z.object({
    AttributeName: z.string(),
    DeliveryMedium: z.string(),
    Destination: z.string(),
  }),
  UserConfirmed: z.boolean(),
  UserSub: z.string(),
});

export const AuthTokensSchema = z.object({
  AccessToken: z.string(),
  ExpiresIn: z.number(),
  IdToken: z.string(),
  RefreshToken: z.string(),
  TokenType: z.string(),
});

export const AuthLoginSchema = z.object({
  statusCode: z.number(),
  token: z.string(),
});

export const AuthErrorResponseSchema = z.object({
  error: z.string(),
  details: z.string(),
});
