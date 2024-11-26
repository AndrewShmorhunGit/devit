import { StyledScrollContainer } from "@styles/styled/containers";
import React, { ReactNode, CSSProperties } from "react";

type ScrollContainerProps = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
  ...rest
}) => {
  return <StyledScrollContainer {...rest}>{children}</StyledScrollContainer>;
};
