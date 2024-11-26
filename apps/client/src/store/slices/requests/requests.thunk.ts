import { requestsApi } from "@/store/api/requests.api";
import { RootState } from "@/store/store.types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  cancelRequests,
  incrementRequestCount,
  updateRequestEndTime,
} from "./requests.slice";
import { TOTAL_REQUESTS } from "@/pages/PrivatePages/Dashboard/Dashboard";
import { toast } from "react-toastify";

export const processQueue = createAsyncThunk<
  void,
  number,
  { state: RootState }
>("requests/processQueue", async (concurrencyLimit, { dispatch, getState }) => {
  const abortController = new AbortController();
  const signal = abortController.signal;

  let { responseCount } = getState().requests;
  const promises: Promise<void>[] = [];

  toast.info("Starting to send requests...");

  const sendRequest = async (index: number): Promise<void> => {
    if (getState().requests.isCanceled) return;

    const startTime = Date.now();

    dispatch(
      incrementRequestCount({
        index,
        startTime,
      })
    );

    try {
      await dispatch(
        requestsApi.endpoints.submitAmount.initiate({ index, signal })
      ).unwrap();

      dispatch(
        updateRequestEndTime({
          index,
          endTime: Date.now(),
        })
      );
    } catch (error) {
      if (!getState().requests.isCanceled) {
        toast.error(`Error on request #${index}. Stopping requests.`);
        dispatch(cancelRequests());
      }
    }
  };

  const manageRequests = async (): Promise<void> => {
    while (responseCount < TOTAL_REQUESTS) {
      if (getState().requests.isCanceled) break; // Проверяем флаг отмены

      const activeRequests = promises.length;

      if (activeRequests < concurrencyLimit) {
        const nextIndex = responseCount + promises.length + 1;
        if (nextIndex > TOTAL_REQUESTS) break;

        const requestPromise = sendRequest(nextIndex).finally(() => {
          promises.splice(promises.indexOf(requestPromise), 1); // Удаляем завершённый запрос
          responseCount = getState().requests.responseCount;
        });

        promises.push(requestPromise);
      }

      if (promises.length >= concurrencyLimit) {
        await Promise.race(promises); // Ждём завершения одного из запросов
      }
    }
  };

  try {
    if (!getState().requests.isCanceled) {
      await manageRequests();
      await Promise.all(promises); // Ожидаем завершения всех запросов
    }
    if (!getState().requests.isCanceled) {
      toast.success("Requests completed!");
    }
  } finally {
    if (getState().requests.isCanceled) {
      console.log("Queue canceled.");
    }
    dispatch({ type: "requests/stopLoading" });
  }
});
