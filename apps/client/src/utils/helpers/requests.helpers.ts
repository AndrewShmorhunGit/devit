import {
  cancelRequests,
  resetRequestCount,
} from "@/store/slices/requests/requests.slice";
import { Dispatch } from "@reduxjs/toolkit";

export const cancelQueue = () => (dispatch: Dispatch) => {
  dispatch(cancelRequests()); // Устанавливаем флаг isCanceled
  dispatch(resetRequestCount()); // Сбрасываем состояние
};
