import { Outlet, Navigate } from "react-router-dom";
import { PageHeader } from "@components/Headers/PageHeader";
import AppLoader from "../App/AppLoader";
import AppError from "../App/AppError";
import { useAppSelector } from "@store/store.hooks";
import { selectIsAuthenticated } from "@store/slices/auth/auth.selectors";
import { PAGE_PATH } from "@utils/constants/common.constants";
import { useAppRequests } from "@providers/AppRequestsProvider";
import { StyledPageContainer } from "@styles/styled/containers";
import { Footer } from "../Footer/Footer";

export const PrivateLayout = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const { isLoading, error } = useAppRequests();

  if (!isAuthenticated) {
    return <Navigate to={PAGE_PATH.login} replace />;
  }

  if (isLoading) {
    return <AppLoader />;
  }

  if (error) {
    return <AppError error={error} />;
  }

  return (
    <StyledPageContainer>
      <PageHeader />
      <Outlet />
      <Footer />
    </StyledPageContainer>
  );
};
