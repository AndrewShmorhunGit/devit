import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./auth.types";
import { getAccessToken, handleSession } from "@utils/helpers/session.helpers";
import { authApi } from "@/store/api/auth.api";
import { AuthTokensResponseType } from "@/utils/types/auth.types";

const initialState: AuthState = {
  isAuthenticated: !!getAccessToken(),
  authAction: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setAuthAction: (state: AuthState, action: PayloadAction<boolean>) => {
      state.authAction = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        if ("token" in (payload as AuthTokensResponseType)) {
          const { token } = payload as AuthTokensResponseType;
          handleSession(token);
          state.isAuthenticated = true;
          state.authAction = true;
        }
      }
    );
  },
});

export const { setIsAuthenticated, setAuthAction } = authSlice.actions;
