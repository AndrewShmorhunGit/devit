import { TextField } from "@/components/TextFields/TextField";
import { FlexBox } from "@/styles/styled/boxes";
import { Typography } from "@mui/material";
import styled from "styled-components/macro";

export const VerificationFormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const CodeInputContainer = styled(FlexBox)`
  gap: 8px;
  max-width: 320px;
`;

export const CodeDigitField = styled(TextField)`
  input {
    text-align: center;
    border: none;
  }
`;

export const ButtonContainer = styled(FlexBox)`
  margin-top: 16px;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
`;

export const ResendPrompt = styled(Typography)`
  color: ${({ theme }) => theme.palette.error.main};
  margin-top: 8px;
`;
