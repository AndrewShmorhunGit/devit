import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "@/store/store.hooks"; // Custom hook for accessing Redux store state
import { useTheme } from "styled-components/macro"; // Hook to access the theme object
import { Box } from "@mui/material";
import { Body2Typography } from "@/components/Typography";
import { useTranslation } from "react-i18next";

// ChartView component to render a line chart with custom tooltips
export const ChartView: React.FC = () => {
  const log = useAppSelector((state) => state.requests.log); // Retrieve data log from Redux state
  const theme = useTheme(); // Access the current theme (light/dark mode and palette)
  const { t } = useTranslation();
  // If there is no data, display a message
  if (!log.length) return <div>No data available for the chart.</div>;

  // Calculate the Y-axis range based on the data
  const minY = (log[0]?.startTime || 0) - 1000; // Minimum Y value with a buffer
  const maxY = (log[log.length - 1]?.startTime || 0) + 2300; // Maximum Y value with a buffer

  // Generate tick positions for the X-axis, showing every 10th point
  const xTicks = Array.from(
    { length: Math.ceil(log.length / 10) + 1 },
    (_, i) => i * 10
  ).filter((tick) => tick <= log.length);

  // Custom tooltip for displaying detailed information about the data point
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const { index, startTime, endTime } = payload[0].payload;
      return (
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper, // Tooltip background
            border: `1px solid ${theme.palette.divider}`, // Border color
            padding: 2,
            borderRadius: 2,
            color: theme.palette.text.primary, // Text color
            boxShadow: theme.shadows[3], // Box shadow for depth
          }}
        >
          <Body2Typography color="text.secondary">
            {t("general.index")}: {index} {/* Display the index */}
          </Body2Typography>
          <Body2Typography color="primary.main">
            {t("general.start")}: {startTime || "n/a"} ms{" "}
            {/* Start timestamp */}
          </Body2Typography>
          <Body2Typography
            color={
              theme.palette.mode === "dark"
                ? "secondary.light"
                : "secondary.dark"
            }
          >
            {t("general.end")}: {endTime || "n/a"} ms {/* End timestamp */}
          </Body2Typography>
          <Body2Typography color="text.secondary">
            {t("general.duration")}:{" "}
            {startTime && endTime
              ? `${endTime - startTime} ms` // Duration if both timestamps are available
              : t("general.inProgress")}
            {/* Handle missing data */}
          </Body2Typography>
        </Box>
      );
    }
    return null; // Return null when tooltip is not active
  };

  // Render the responsive LineChart
  return (
    <ResponsiveContainer width={"100%"} height={600}>
      <LineChart
        data={log} // Data for the chart
        margin={{ top: 8, right: 8, left: 4, bottom: 20 }} // Chart margin
      >
        <CartesianGrid stroke={theme.palette.divider} /> {/* Grid lines */}
        <XAxis
          dataKey="index" // Key for X-axis data
          tick={{ fill: theme.palette.text.primary }} // Tick styling
          ticks={xTicks} // Custom ticks
          label={{
            value: t("general.index"), // Axis label
            position: "insideBottom",
            offset: -20,
            fill: theme.palette.text.secondary,
          }}
        />
        <YAxis
          domain={[minY, maxY]} // Dynamic Y-axis range
          tick={false} // Hide Y-axis ticks
          axisLine={false} // Hide Y-axis line
          label={{
            value: t("general.timestamp") + " (ms)", // Axis label
            angle: -90, // Rotate label
            position: "insideLeft",
            offset: 25,
            fill: theme.palette.text.secondary,
          }}
        />
        <Tooltip content={<CustomTooltip />} /> {/* Add custom tooltip */}
        <Line
          type="monotone"
          dataKey="startTime" // Line for startTime
          stroke={
            theme.palette.mode === "dark"
              ? theme.palette.primary.light
              : theme.palette.primary.dark
          }
          dot={{ r: 1 }} // Small dots for data points
        />
        <Line
          type="monotone"
          dataKey="endTime" // Line for endTime
          stroke={
            theme.palette.mode === "dark"
              ? theme.palette.secondary.light
              : theme.palette.secondary.dark
          }
          dot={{ r: 1 }} // Small dots for data points
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
