import React, { useState, useEffect } from "react";
import { Body2Typography } from "@components/Typography";

// Define the interface for the PersistentTimer component's props
interface PersistentTimerProps {
  isActive: boolean; // Determines if the timer should run
}

// PersistentTimer component
export const PersistentTimer: React.FC<PersistentTimerProps> = ({
  isActive,
}) => {
  const [time, setTime] = useState(0); // State to track elapsed time
  const timerKey = "persistent_timer"; // Key for storing timer data in localStorage

  // Effect to start, stop, and persist the timer
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isActive) {
      // Reset the timer when it becomes active
      setTime(0);
      localStorage.removeItem(timerKey);

      // Check for a previously stored timestamp
      const storedTimestamp = localStorage.getItem(timerKey);
      const startTimestamp = storedTimestamp
        ? Number(storedTimestamp) // Use stored timestamp if available
        : Date.now(); // Otherwise, set the current timestamp

      // If no stored timestamp, save the current start time
      if (!storedTimestamp) {
        localStorage.setItem(timerKey, String(startTimestamp));
      }

      // Update the timer state at regular intervals
      interval = setInterval(() => {
        setTime(Date.now() - startTimestamp); // Calculate elapsed time
      }, 10);
    } else {
      // When the timer is inactive, persist the paused time
      const storedTimestamp = localStorage.getItem(timerKey);

      if (storedTimestamp) {
        const pausedTime = Date.now() - Number(storedTimestamp); // Calculate paused time
        localStorage.setItem(timerKey, String(Date.now() - pausedTime)); // Save paused time
      }
    }

    // Cleanup interval when the component unmounts or dependencies change
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  // Function to format the elapsed time into mm:ss:ms
  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000); // Calculate minutes
    const seconds = Math.floor((milliseconds % 60000) / 1000); // Calculate seconds
    const ms = Math.floor((milliseconds % 1000) / 10); // Calculate milliseconds
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(ms).padStart(2, "0")}`; // Format as mm:ss:ms
  };

  // Render the formatted timer
  return (
    <Body2Typography sx={{ textAlign: "center", mt: 2 }}>
      {formatTime(time)}
    </Body2Typography>
  );
};
