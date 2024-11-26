import styled from "styled-components/macro";

import { Body2Typography } from "@components/Typography";

export const Timer = styled(Body2Typography)<{ $timerRunning: boolean }>`
  display: ${({ $timerRunning }) => ($timerRunning ? "flex" : "none")};
`;
