import { MEDIA_BREAKPOINT } from "@/utils/constants/media.constants";
import { Box } from "@mui/material";
import styled from "styled-components/macro";

export const StyledPageContainer = styled(Box)`
  display: flex;
  min-height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 32px 32px 32px;
  gap: 32px;
  overflow-x: hidden;

  @media ${MEDIA_BREAKPOINT["768"]} {
    gap: 16px;
    padding: 0 16px 16px 16px;
    margin: 0;
  }

  @media ${MEDIA_BREAKPOINT["480"]} {
    gap: 8px;
    padding: 0 8px 8px 8px;
    margin: 0;
  }
`;

export const StyledLandingPageContainer = styled(StyledPageContainer)`
  overflow: hidden;

  padding: 0 16rem 1rem 16rem;
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`};
  color: ${({ theme }) => theme.palette.text.primary};

  @media ${MEDIA_BREAKPOINT["1440"]} {
    padding: 0 8rem 1rem 8rem;
  }

  @media ${MEDIA_BREAKPOINT["768"]} {
    padding: 0 2rem 1rem 2rem;
  }

  @media ${MEDIA_BREAKPOINT["480"]} {
    padding: 0 8px 8px 8px;
  }
`;

export const StyledScrollContainer = styled(Box)`
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 3px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
