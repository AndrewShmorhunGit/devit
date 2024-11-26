// import { ThemeProvider } from "@providers/ThemeProvider";
// import { GlobalStyle } from "@styles/GlobalStyle";
import { ErrorPage, ErrorPageProps } from "@/pages/PublicPages/Error/ErrorPage";

type AppErrorProps = {
  error?: ErrorPageProps["error"];
};

export default function AppError({ error }: AppErrorProps) {
  return <ErrorPage error={error} />;
}
