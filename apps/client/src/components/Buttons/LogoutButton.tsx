import { IconButton } from "@mui/material";
import { setIsAuthenticated } from "@store/slices/auth/auth.slice";
import { useAppDispatch } from "@store/store.hooks";
import LogoutIcon from "@mui/icons-material/Logout";
import { AUTH_ROUTES } from "@utils/constants/common.constants";

export const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setIsAuthenticated(false));
  };

  if (AUTH_ROUTES.includes(location.pathname) || location.pathname === "/")
    return null;

  return (
    <IconButton color="primary" aria-label="Logout" onClick={handleLogout}>
      <LogoutIcon />
    </IconButton>
  );
};
