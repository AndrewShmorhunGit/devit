import { Box } from "@mui/material";
import { H2Typography } from "@/components/Typography";
import styled from "styled-components/macro";

const H2TypographyStyled = styled(H2Typography)`
  font-weight: 300 !important;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const HeadingContainer = styled(Box)`
  gap: 8px;
  display: flex;
  flex-direction: row;
`;

export const SectionHeading = ({ title }: { title: string }) => {
  const [firstPart, ...restParts] = title.split(" ");
  const remainingTitle = restParts.join(" ");

  return (
    <HeadingContainer>
      <H2TypographyStyled gutterBottom>{firstPart}</H2TypographyStyled>
      <H2Typography gutterBottom>{remainingTitle}</H2Typography>
    </HeadingContainer>
  );
};
