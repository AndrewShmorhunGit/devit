import { Box, Chip } from "@mui/material";
import styled from "styled-components";

const FlexBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: flex-start;
`;

export function Chips({ labels }: { labels: string[] }) {
  return (
    <FlexBox>
      {labels.map((label, index) => (
        <Chip
          key={index}
          label={label}
          variant="outlined"
          sx={{ borderStyle: "dashed" }}
        />
      ))}
    </FlexBox>
  );
}
