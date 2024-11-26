import { MEDIA_BREAKPOINT } from "@/utils/constants/media.constants";
import { Box, Paper } from "@mui/material";
import styled, { keyframes } from "styled-components/macro";

export const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 0.9; }
`;

export const Section = styled(Box)`
  position: relative;
  padding: ${({ theme }) => theme.spacing(8, 0)};
`;

export const SectionPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(4, 8)};
  gap: 2rem;

  @media ${MEDIA_BREAKPOINT["768"]} {
    padding: ${({ theme }) => theme.spacing(4, 4)};
  }

  @media ${MEDIA_BREAKPOINT["480"]} {
    padding: ${({ theme }) => theme.spacing(4, 2)};
  }
`;

export const FullScreenContainer = styled(Box)`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.palette.text.primary};

  /* Left Circle */
  &::before {
    content: "";
    position: absolute;
    top: 26rem;
    left: -25vw;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.palette.primary.main} 0%,
      transparent 60%
    );
    border-radius: 50%;
    opacity: 0.5;
    z-index: 0;
    animation: ${pulse} 10s infinite ease-in-out;
    filter: blur(8px);
  }

  /* Right Circle */
  &::after {
    content: "";

    position: absolute;
    bottom: 0;
    right: -25vw;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.palette.secondary.main} 0%,
      transparent 60%
    );
    z-index: 0;
    border-radius: 50%;
    opacity: 0.5;
    animation: ${pulse} 12s infinite ease-in-out;
    filter: blur(8px);
  }
`;
