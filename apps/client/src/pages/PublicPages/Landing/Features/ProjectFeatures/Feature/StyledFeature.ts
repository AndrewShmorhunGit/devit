import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
} from "@mui/material";
import styled, { keyframes } from "styled-components/macro";

export const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.2); opacity: 0.3; }
`;

export const StyledAccordion = styled(MuiAccordion)(({ theme }) => ({
  overflow: "hidden",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
  boxShadow: "none !important",
  "&. MuiAccordion-root:before": { display: "none" },
  "&:hover": {
    color: theme.palette.primary.light,
  },
}));

export const StyledAccordionSummary = styled(MuiAccordionSummary)(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.primary,
    background: "transparent",
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: theme.palette.primary.main,
    },
  })
);

export const StyledAccordionDetails = styled(MuiAccordionDetails)`
  z-index: "10";
  color: ${({ theme }) => theme.palette.text.secondary};
  position: relative;
  transition: all 0.3s ease;
  margin-bottom: 32px;

  &::after {
    content: "";
    position: absolute;
    bottom: -50px;
    right: -50px;
    width: 100px;
    height: 100px;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.palette.secondary.main} 0%,
      transparent 60%
    );
    z-index: 0;
    border-radius: 50%;
    animation: ${pulse} 12s infinite ease-in-out;
    filter: blur(8px);
  }
`;
