import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@store/store.types";
import { AuthState } from "./auth.types";

export const selectAuthState = (state: RootState) => state.auth;

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);
export const selectAuthAction = createSelector(
  selectAuthState,
  (state: AuthState) => state.authAction
);
