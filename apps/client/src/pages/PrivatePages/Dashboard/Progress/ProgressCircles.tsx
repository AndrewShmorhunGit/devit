import React from "react";
import { CircularProgress, Box } from "@mui/material";
import { useAppSelector } from "@/store/store.hooks";
import { useTheme } from "styled-components/macro";
import { Subtitle1Typography } from "../../../../components/Typography";
import { FlexBox } from "@/styles/styled/boxes";
import { useTranslation } from "react-i18next";

interface ProgressCircleProps {
  total: number;
}

export const ProgressCircles: React.FC<ProgressCircleProps> = ({ total }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { requestCount, responseCount, isLoading } = useAppSelector(
    (state) => state.requests
  );

  const requestProgress = Math.min((requestCount / total) * 100, 100);
  const responseProgress = Math.min((responseCount / total) * 100, 100);

  return (
    <FlexBox
      sx={{
        gap: "5vw", // Creates a gap between the two progress circles
      }}
    >
      {/* Request progress circle */}
      <Box
        sx={{
          position: "relative", // For overlaying text
          display: "inline-flex",
        }}
      >
        <CircularProgress
          variant="determinate"
          value={requestProgress} // Dynamic progress value for requests
          size={120}
          thickness={5}
          sx={{
            color: theme.palette.info.light, // Color for the request progress
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute", // Centers the text inside the circle
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FlexBox flexDirection={"column"} gap={0.5}>
            <Subtitle1Typography component="div" color="text.secondary">
              {t("general.requests")}
            </Subtitle1Typography>
            <Subtitle1Typography component="div" color="text.secondary">
              {`${requestCount} / ${total}`}
            </Subtitle1Typography>
          </FlexBox>
        </Box>
      </Box>

      {/* Response progress circle */}
      <Box
        sx={{
          position: "relative", // For overlaying text
          display: "inline-flex",
        }}
      >
        {isLoading && (
          <CircularProgress
            variant="determinate"
            size={120}
            thickness={5}
            sx={{
              position: "absolute", // Rotating indicator for loading
              color: theme.palette.secondary.main,
              zIndex: 1,
              animationDuration: "1.4s",
            }}
          />
        )}
        <CircularProgress
          variant="determinate"
          value={responseProgress} // Dynamic progress value for responses
          size={120}
          thickness={5}
          sx={{
            color: theme.palette.primary.light, // Color for the response progress
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute", // Centers the text inside the circle
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FlexBox flexDirection={"column"} gap={0.5}>
            <Subtitle1Typography component="div" color="text.secondary">
              {t("general.responses")}
            </Subtitle1Typography>
            <Subtitle1Typography component="div" color="text.secondary">
              {`${responseCount} / ${total}`}
            </Subtitle1Typography>
          </FlexBox>
        </Box>
      </Box>
    </FlexBox>
  );
};
