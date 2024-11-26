import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PAGE_PATH } from "@utils/constants/common.constants";
import AppLayout from "./AppLayout";
import { PrivateLayout } from "@components/Layout/PrivateLayout";
import { PublicLayout } from "@components/Layout/PublicLayout";
import { BackdropLoader } from "@components/Loaders/BackdropLoader";
import { useAuthEffect } from "@/hooks/useAuthEffect.hook";
import { selectIsAuthenticated } from "@store/slices/auth/auth.selectors";
import { useAppSelector } from "@/store/store.hooks";
import { AuthFormVariant } from "@/utils/enums/common.enums";

const Dashboard = lazy(
  () => import("@/pages/PrivatePages/Dashboard/Dashboard")
);
const AuthPage = lazy(() => import("@/pages/PublicPages/Auth/AuthPage"));
const LandingPage = lazy(() => import("@/pages/PublicPages/Landing/Landing"));

export const AppPages = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  useAuthEffect(isAuthenticated);

  const Loader = <BackdropLoader backgroundOpacity={0} isLoading />;

  const privateRoutes = [
    {
      path: PAGE_PATH.dashboard,
      element: <Dashboard />,
    },
  ].map(({ path, element }, index) => (
    <Route
      key={index}
      path={path}
      element={<Suspense fallback={Loader}>{element}</Suspense>}
    />
  ));

  const publicRoutes = [
    {
      path: PAGE_PATH.main,
      element: <LandingPage />,
    },
    {
      path: PAGE_PATH.login,
      element: <AuthPage formVariant={AuthFormVariant.LOGIN} />,
    },
    {
      path: PAGE_PATH.register,
      element: <AuthPage formVariant={AuthFormVariant.REGISTRATION} />,
    },
    {
      path: PAGE_PATH.verification,
      element: <AuthPage formVariant={AuthFormVariant.EMAIL_VERIFY} />,
    },
  ].map(({ path, element }, index) => (
    <Route
      key={index}
      path={path}
      element={<Suspense fallback={Loader}>{element}</Suspense>}
    />
  ));

  return (
    <Routes>
      <Route path={PAGE_PATH.main} element={<AppLayout />}>
        <Route element={<PrivateLayout />}>{privateRoutes}</Route>
        <Route element={<PublicLayout />}>{publicRoutes}</Route>
      </Route>
    </Routes>
  );
};
