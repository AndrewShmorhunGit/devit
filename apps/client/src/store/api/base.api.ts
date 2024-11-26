import { BASE_API_URL } from "@/configs/env.config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_REDUCER_PATH_NAME = "api";
const CACHE_LIVE_TIME = 60000; //1 min

export const baseApi = createApi({
  reducerPath: API_REDUCER_PATH_NAME,
  keepUnusedDataFor: CACHE_LIVE_TIME,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    credentials: "include",
  }),
  endpoints: () => ({}),
});
