import { FC } from "react";

import styled, { css } from "styled-components/macro";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Container = styled(Backdrop)<{
  $borderRadius?: string;
  $compensatePadding?: string;
  $backgroundOpacity?: number;
}>`
  background: rgba(
    0,
    0,
    0,
    ${({ $backgroundOpacity }) => $backgroundOpacity ?? "0.1"}
  );
  position: absolute;
  backdrop-filter: blur(2px);

  ${({ theme }) => {
    return css`
      color: ${theme.palette.primary.main};
      z-index: ${theme.zIndex.drawer};
    `;
  }}

  ${({ $borderRadius }) => {
    return $borderRadius
      ? css`
          border-radius: ${$borderRadius};
        `
      : null;
  }}

  ${({ $compensatePadding }) => {
    return $compensatePadding
      ? css`
          margin: -${$compensatePadding};
        `
      : null;
  }};
`;

type BackdropLoaderProps = {
  isLoading: boolean;
  borderRadius?: number | string;
  backgroundOpacity?: number;
  compensatePadding?: string;
  size?: number;
};

export const BackdropLoader: FC<BackdropLoaderProps> = ({
  isLoading,
  backgroundOpacity,
  borderRadius,
  compensatePadding,
  size,
}) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Container
      $borderRadius={
        (!!borderRadius &&
          (typeof borderRadius === "string"
            ? borderRadius
            : `${borderRadius}px`)) ||
        undefined
      }
      $backgroundOpacity={backgroundOpacity}
      $compensatePadding={compensatePadding}
      open={isLoading}
    >
      <CircularProgress color="inherit" size={size} />
    </Container>
  );
};
