import styled, { keyframes } from "styled-components/macro";
import { Section } from "../LandingStyled";
import { MEDIA_BREAKPOINT } from "@utils/constants/media.constants";

// Animation for subtle movement
export const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

export const StyledHeroSection = styled(Section)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 6rem 4rem;
  margin-bottom: 2rem;
  overflow: hidden;
  color: ${({ theme }) => theme.palette.text.primary};
  min-height: 20rem;
  /* Background pattern */
  background: ${({ theme }) => `
    radial-gradient(circle at 20% 20%, ${theme.palette.primary.light} 0%, transparent 25%),
    radial-gradient(circle at 80% 80%, ${theme.palette.secondary.light} 0%, transparent 25%),
    linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)
  `};

  /* Pseudo-element for additional effect */
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: ${({ theme }) => `
      radial-gradient(circle at 50% 50%, ${theme.palette.primary.main} 10%, transparent 60%),
      radial-gradient(circle at 100% 100%, ${theme.palette.secondary.main} 10%, transparent 60%)
    `};
    opacity: 0.3;
    animation: ${floatAnimation} 10s ease-in-out infinite;
  }

  @media ${MEDIA_BREAKPOINT["768"]} {
    gap: 24px;
    padding: 4rem 2rem;
    margin-bottom: 1rem;
  }

  @media ${MEDIA_BREAKPOINT["480"]} {
    padding: 2rem 1rem;
    margin-bottom: 8px;
    min-height: 16rem;
  }
`;
