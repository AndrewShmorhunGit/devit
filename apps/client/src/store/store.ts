import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authApi } from "@store/api/auth.api";
import { baseApi } from "./api/base.api";
import { authSlice } from "./slices/auth/auth.slice";
import { appSlice } from "./slices/app/app.slice";
import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import { requestsSlice } from "./slices/requests/requests.slice";

const sliceReducers = {
  auth: authSlice.reducer,
  requests: requestsSlice.reducer,
  appSettings: appSlice.reducer,
};

const apiReducers = {
  api: baseApi.reducer,
  authApi: authApi.reducer,
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["auth"],
};

const appReducer = combineReducers({
  ...sliceReducers,
  ...apiReducers,
});

export const RESET_STORE_ACTION_TYPE = "resetStore";

const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: Action
) => {
  if (action.type === RESET_STORE_ACTION_TYPE) {
    state = undefined;
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(authApi.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
