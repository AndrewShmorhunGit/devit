import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import styled from "styled-components/macro";

type CustomButtonProps = {
  href?: string;
  target?: string;
  rel?: string;
  to?: string;
} & ButtonProps;

const StyledPrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  text-transform: none !important;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light} !important;
  }
`;

export const PrimaryButton: FC<CustomButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledPrimaryButton variant="contained" {...rest}>
      {children}
    </StyledPrimaryButton>
  );
};
