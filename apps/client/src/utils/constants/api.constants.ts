import { BASE_API_URL } from "@/configs/env.config";

export const API_URL = {
  auth: {
    login: `${BASE_API_URL}/login`,
    register: `${BASE_API_URL}/register`,
    confirm: `${BASE_API_URL}/confirm`,
    resendCode: `${BASE_API_URL}/resend`,
  },
};
