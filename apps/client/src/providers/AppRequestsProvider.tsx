import { SerializedError } from "@reduxjs/toolkit";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { selectIsAuthenticated } from "@store/slices/auth/auth.selectors";
import { FetchApiError } from "@/utils/types/api.types";
import { useAppSelector } from "@store/store.hooks";

type AppRequestsContextType = {
  isLoading: boolean;
  error: FetchApiError | SerializedError | unknown;
};

// Create the context with default values
const AppRequestsContext = createContext<AppRequestsContextType | undefined>(
  undefined
);

export const AppRequestsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AppRequestsContextType["error"]>(null);

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  // Mocked request functions or real API calls
  const runRequests = async () => {
    try {
      setIsLoading(true);
      // Simulate a delay for 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Clear any previous error
      error && setError(null);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      runRequests();
    }
  }, [isAuthenticated]);

  // Memoize context value to avoid unnecessary re-renders
  const contextValue: AppRequestsContextType = useMemo(
    () => ({ isLoading, error }),
    [isLoading, error]
  );

  return (
    <AppRequestsContext.Provider value={contextValue}>
      {children}
    </AppRequestsContext.Provider>
  );
};

// Custom hook to use AppRequests context with an error if it's not wrapped in the provider
export const useAppRequests = () => {
  const context = useContext(AppRequestsContext);

  if (!context) {
    throw new Error(
      "useAppRequests must be used within an AppRequestsProvider"
    );
  }

  return context;
};
