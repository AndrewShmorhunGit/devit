import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export type ErrorItem = { [key in string]: string };

export type ErrorData = {
  errors: ErrorItem[];
};

export type ApiError = {
  status: number;
  data?: ErrorData;
};

export type FetchApiError = FetchBaseQueryError & ApiError;
