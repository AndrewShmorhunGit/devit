import { StyledPageContainer } from "@/styles/styled/containers";
import { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return <StyledPageContainer>{children}</StyledPageContainer>;
}
