import React from "react";
import { Button, ButtonProps } from "@mui/material";
import styled from "styled-components/macro";

type CustomButtonProps = {
  href?: string;
  target?: string;
  rel?: string;
  to?: string;
} & ButtonProps;

const StyledSecondaryButton = styled(Button)`
  color: ${({ theme }) => theme.palette.primary.contrastText} !important;
  background-color: ${({ theme }) => theme.palette.primary.light} !important;
  text-transform: none !important;
  border: solid 2px transparent !important;
  &:hover {
    border: solid 2px ${({ theme }) => theme.palette.primary.dark} !important;
    background-color: transparent !important;
  }
`;

export const SecondaryButton: React.FC<CustomButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledSecondaryButton variant="outlined" {...rest}>
      {children}
    </StyledSecondaryButton>
  );
};
