import { ThemeProvider } from "@providers/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "@store/store";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRequestsProvider } from "@providers/AppRequestsProvider";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { ErrorBoundary } from "./ErrorBoundary";

type AppProvidersProps = { children: React.ReactNode };

export const AppProvider: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter
        basename={import.meta.env.BASE_URL}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <AppRequestsProvider>
          <ThemeProvider>
            <ErrorBoundary>
              <GlobalStyle />
              {children}
            </ErrorBoundary>
          </ThemeProvider>
        </AppRequestsProvider>
      </BrowserRouter>
    </Provider>
  );
};
