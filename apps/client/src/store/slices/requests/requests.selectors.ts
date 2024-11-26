import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/store.types";
import { RequestsState } from "./requests.types";

export const selectRequestsState = (state: RootState) => state.requests;

export const selectRequestsCount = createSelector(
  selectRequestsState,
  (state: RequestsState) => state.requestCount
);

export const selectResponseCount = createSelector(
  selectRequestsState,
  (state: RequestsState) => state.responseCount
);

export const selectLoadingRequests = createSelector(
  selectRequestsState,
  (state: RequestsState) => state.isLoading
);

export const selectCancelRequests = createSelector(
  selectRequestsState,
  (state: RequestsState) => state.isCanceled
);
