import { BASE_API_URL } from "@/configs/env.config";
import {
  ApiContentType,
  HttpHeader,
  HttpMethod,
} from "@/utils/enums/api.enums";
import { baseApi } from "./base.api";

import {
  RegistrationResponseType,
  AuthTokensResponseType,
  AuthErrorResponseType,
  AuthVerificationMessageType,
  AuthResendCodeMessageType,
} from "@/utils/types/auth.types";
import { RegisterFormValuesType } from "@/pages/PublicPages/Auth/AuthForm/Register/Register";
import {
  EmailVerificationFormValuesType,
  ResendCodeValuesType,
} from "@/pages/PublicPages/Auth/AuthForm/EmailVerification/hook/useEmailVerification";

type LoginFormValues = { username: string; password: string };
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<
      RegistrationResponseType | AuthErrorResponseType,
      RegisterFormValuesType
    >({
      query: (values) => ({
        url: BASE_API_URL + "/register",
        method: HttpMethod.POST,
        headers: {
          [HttpHeader.CONTENT_TYPE]: ApiContentType.APPLICATION_JSON,
        },
        body: values,
      }),
    }),
    login: builder.mutation<
      AuthTokensResponseType | AuthErrorResponseType,
      LoginFormValues
    >({
      query: (values) => ({
        url:
          "https://se2wozrsg3.execute-api.us-east-1.amazonaws.com/local" +
          "/login",
        method: HttpMethod.POST,
        headers: {
          [HttpHeader.CONTENT_TYPE]: ApiContentType.APPLICATION_JSON,
        },
        body: values,
      }),
    }),
    emailConfirm: builder.mutation<
      AuthVerificationMessageType | AuthErrorResponseType,
      EmailVerificationFormValuesType
    >({
      query: (values) => ({
        url: BASE_API_URL + "/confirm/email",
        method: HttpMethod.POST,
        headers: {
          [HttpHeader.CONTENT_TYPE]: ApiContentType.APPLICATION_JSON,
        },
        body: values,
      }),
    }),
    resendCode: builder.mutation<
      AuthResendCodeMessageType | AuthErrorResponseType,
      ResendCodeValuesType
    >({
      query: (values) => ({
        url: BASE_API_URL + "/confirm/resend",
        method: HttpMethod.POST,
        headers: {
          [HttpHeader.CONTENT_TYPE]: ApiContentType.APPLICATION_JSON,
        },
        body: values,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useEmailConfirmMutation,
  useResendCodeMutation,
} = authApi;
