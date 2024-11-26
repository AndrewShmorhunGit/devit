export const PAGE_PATH = {
  main: "/",
  login: "/login",
  register: "/register",
  verification: "/verification",
  dashboard: "/dashboard",
};

export const AUTH_ROUTES = [
  PAGE_PATH.login,
  PAGE_PATH.register,
  PAGE_PATH.verification,
];

export const AUTH_REGEXPS = {
  name: new RegExp(/^[a-zA-Z\s'-]+$/),
  password: new RegExp(/^[a-zA-Z0-9]+$/),
  latinRegex: new RegExp(/[a-zA-Z]/),
  digitRegex: new RegExp(/[0-9]/),
  capitalLetterRegex: /[A-Z]/,
};

export const INITIAL_IS_LOADING = false;

export const INITIAL_ERROR = undefined;

export const EMAIL_VERIFICATION_CODE_EXPIRATION = 180;
