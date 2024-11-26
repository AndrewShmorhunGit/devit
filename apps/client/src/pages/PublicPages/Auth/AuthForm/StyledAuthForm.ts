import { MEDIA_BREAKPOINT } from "@/utils/constants/media.constants";
import { Paper } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const FormContainer = motion.create(styled(Paper)`
  z-index: 10;
  padding: ${({ theme }) => theme.spacing(8, 6)};
  display: flex;
  max-width: 600px;
  border: 2px solid ${({ theme }) => theme.palette.primary.light};
  background-color: ${({ theme }) => theme.palette.background.paper};
  @media ${MEDIA_BREAKPOINT["768"]} {
    padding: ${({ theme }) => theme.spacing(4, 2)};
  }
  @media ${MEDIA_BREAKPOINT["480"]} {
    gap: 8px;
  }
`);

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const LinkStateHandler = styled(`span`)`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.light};
`;
