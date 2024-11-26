function getEnvVar(key: string): string {
  const value = import.meta.env[key as keyof ImportMetaEnv];
  if (typeof value === "undefined") {
    throw new Error(`Environment variable ${key} is not defined!`);
  }
  return value;
}

enum ENV {
  AUTH_API_URL = "VITE_COGNITO_AUTH_API",
  AUTH_CLIENT_ID = "VITE_COGNITO_USER_POOL_CLIENT_ID",
  BASE_API_URL = "VITE_BASE_API_URL",
}

// API
export const BASE_API_URL = getEnvVar(ENV.BASE_API_URL);
