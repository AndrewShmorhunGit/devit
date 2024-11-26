import { createSlice } from "@reduxjs/toolkit";
import { requestsApi } from "@/store/api/requests.api";
import { RequestLogType, RequestsState } from "./requests.types";
// import { TOTAL_REQUESTS } from "@/pages/PrivatePages/Dashboard/Dashboard";
import { toast } from "react-toastify";

const initialState: RequestsState = {
  requestCount: 0,
  responseCount: 0,
  isLoading: false,
  isCanceled: false,
  log: [] as RequestLogType[],
  stopTimestamp: null as number | null,
};

export const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    incrementRequestCount: (state, { payload }) => {
      state.requestCount++;
      state.log.push({
        index: payload.index,
        startTime: payload.startTime,
        endTime: null,
      });
    },
    updateRequestEndTime: (state, { payload }) => {
      const request = state.log.find((item) => item.index === payload.index);
      if (request) {
        request.endTime = payload.endTime;
      }
    },
    resetRequestCount: (state) => {
      state.requestCount = 0;
      state.responseCount = 0;
      state.isLoading = false;
      state.isCanceled = false;
      state.log = [];
      state.stopTimestamp = null;
    },
    setStopTimestamp: (state) => {
      state.stopTimestamp = Date.now();
    },
    cancelRequests: (state) => {
      state.isCanceled = true;
      state.isLoading = false;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        requestsApi.endpoints.submitAmount.matchFulfilled,
        (state, { payload }) => {
          if (payload.index !== undefined) {
            state.responseCount++;
            const request = state.log.find(
              (item) => item.index === payload.index
            );
            if (request) {
              request.endTime = Date.now();
            }
          }

          // if (state.responseCount >= TOTAL_REQUESTS) state.isLoading = false;
        }
      )
      .addMatcher(requestsApi.endpoints.submitAmount.matchRejected, (state) => {
        state.isCanceled = true;
        state.isLoading = false;
        toast.error("An error occurred. Stopping requests.");
      })
      .addMatcher(requestsApi.endpoints.submitAmount.matchPending, (state) => {
        state.isLoading = true;
      });
  },
});

export const {
  incrementRequestCount,
  updateRequestEndTime,
  resetRequestCount,
  cancelRequests,
  stopLoading,
  setStopTimestamp,
} = requestsSlice.actions;
