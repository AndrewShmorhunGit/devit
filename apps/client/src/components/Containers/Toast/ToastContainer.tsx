import { CSSProperties, FC, RefAttributes } from "react";
import {
  ToastContainer as ReactToastContainer,
  ToastContainerProps as ReactToastContainerProps,
} from "react-toastify";

import { useThemeContext } from "@providers/ThemeProvider";

type ToastContainerProps = ReactToastContainerProps &
  RefAttributes<HTMLDivElement>;

export const ToastContainer: FC<ToastContainerProps> = (props) => {
  const { theme } = useThemeContext();

  const toastStyles: CSSProperties = {
    backgroundColor: theme.palette.background.paper,
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: 400,
    width: "320px",
  };

  return (
    <ReactToastContainer
      position={"top-right"}
      toastStyle={toastStyles}
      hideProgressBar={false}
      // icon={false}
      theme={theme.palette.mode}
      closeOnClick
      pauseOnHover
      draggable
      {...props}
    />
  );
};
