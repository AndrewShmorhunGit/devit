import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectIsAuthenticated } from "@store/slices/auth/auth.selectors";
import { useAppSelector } from "@store/store.hooks";
import { AUTH_ROUTES, PAGE_PATH } from "@utils/constants/common.constants";
import { StyledLandingPageContainer } from "@styles/styled/containers";
import { PageHeader } from "@components/Headers/PageHeader";
import { Footer } from "../Footer/Footer";

export const PublicLayout = () => {
  const { pathname } = useLocation();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const isNeedRedirect = isAuthenticated && AUTH_ROUTES.includes(pathname);
  if (isNeedRedirect) {
    return <Navigate to={PAGE_PATH.dashboard} replace />;
  }

  return (
    <StyledLandingPageContainer>
      <PageHeader />
      <Outlet />
      <Footer />
    </StyledLandingPageContainer>
  );
};
