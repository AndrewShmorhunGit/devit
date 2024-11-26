import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components/macro";
import { ToastContainer } from "@components/Containers/Toast/ToastContainer";
import { Box } from "@mui/material";
// import { ToastGlobalStyles } from "../Containers/Toast/TostsStyled";

const Container = styled(Box)`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const AppLayout = () => {
  return (
    <Container>
      <Outlet />
      {/* <ToastGlobalStyles /> */}
      <ToastContainer />
    </Container>
  );
};

export default AppLayout;
