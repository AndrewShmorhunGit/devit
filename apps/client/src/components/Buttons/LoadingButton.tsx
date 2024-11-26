import { FC } from "react";

import { ButtonProps, CircularProgress } from "@mui/material";

import { PrimaryButton } from "@components/Buttons/PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

type LoadingButtonProps = {
  isLoading: boolean;
  secondary?: boolean;
} & ButtonProps;

export const LoadingButton: FC<LoadingButtonProps> = ({
  secondary = false,
  disabled = false,
  isLoading,
  children,
  ...rest
}) => {
  if (secondary) {
    return (
      <SecondaryButton
        startIcon={isLoading && <CircularProgress size={16} color="inherit" />}
        disabled={isLoading || disabled}
        {...rest}
      >
        {children}
      </SecondaryButton>
    );
  }

  return (
    <PrimaryButton
      sx={{ textTransform: "none" }}
      startIcon={isLoading && <CircularProgress size={16} color="inherit" />}
      disabled={isLoading || disabled}
      {...rest}
    >
      {children}
    </PrimaryButton>
  );
};
