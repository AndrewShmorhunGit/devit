import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Section, SectionPaper } from "../LandingStyled";
import styled, { keyframes } from "styled-components/macro";
import { ProjectFeatures } from "./ProjectFeatures/ProjectFeatures";
import { SectionHeading } from "@/components/Typography/SectionHeading";

const orbitAnimation = keyframes`
  0% { transform: rotate(0deg) translateX(50%); }
  50% { transform: rotate(180deg) translateX(50%); }
  100% { transform: rotate(360deg) translateX(50%); }
`;

export const StyledFeaturesContainer = styled(SectionPaper)`
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.palette.primary.main} 0%,
      transparent 60%
    );
    border-radius: 50%;
    opacity: 0.5;
    top: calc(50% - 12rem);
    left: calc(30% - 12rem);
    transform-origin: center;
    filter: blur(8px);
  }

  &::before {
    left: calc(50%);
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.palette.primary.main} 0%,
      transparent 60%
    );
    animation: ${orbitAnimation} 36s linear infinite reverse;
  }

  &::after {
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.palette.secondary.main} 0%,
      transparent 60%
    );
    animation: ${orbitAnimation} 36s linear infinite;
  }
`;

export function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <Section sx={{ position: "relative", overflow: "visible" }}>
      <Container>
        <StyledFeaturesContainer>
          <SectionHeading title={t("landing.features.title")} />
          <ProjectFeatures />
        </StyledFeaturesContainer>
      </Container>
    </Section>
  );
}
