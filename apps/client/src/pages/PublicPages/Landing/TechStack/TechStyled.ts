import { Body2Typography } from "@/components/Typography";
import { MEDIA_BREAKPOINT } from "@/utils/constants/media.constants";
import { Box, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const TechCard = motion.create(styled(Card)`
  height: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows[6]};
  }
`);

export const TechCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  transition: all 0.6s ease;

  &:hover .icon {
    transform: scale(0.6) translate(0, -30px);
  }

  &:hover .title {
    opacity: 0;
  }

  &:hover .description {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const TechTitle = styled(Box)`
  font-size: 1.25rem;
  text-align: center;
  font-weight: 300 !important;
  color: ${({ theme }) => theme.palette.text.primary};

  ${TechCardContent}:not(:hover) & {
    opacity: 1;
    animation: fadeIn 2s forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const TechIconContainer = styled(Box)`
  padding: 1rem 0;
  transition: transform 0.8s ease, opacity 0.8s ease;
`;

export const TechDescription = styled(Body2Typography)`
  position: absolute;
  bottom: 10%;
  font-size: 16px !important;
  text-align: center;
  padding: ${({ theme }) => theme.spacing(0, 3)};
  color: ${({ theme }) => theme.palette.text.primary};
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.8s ease;

  @media ${MEDIA_BREAKPOINT["768"]} {
    padding-bottom: ${({ theme }) => theme.spacing(3)};
  }

  @media ${MEDIA_BREAKPOINT["480"]} {
    padding: ${({ theme }) => theme.spacing(2)};
    line-height: 16px !important;
    letter-spacing: 0.6px;
  }

  @media ${MEDIA_BREAKPOINT["320"]} {
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;
