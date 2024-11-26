import { useEffect, useState } from "react";

type TimerProps = {
  timerRunning: boolean;
  setTimerRunning: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  time?: number;
};

export const useTimer = ({
  timerRunning,
  setTimerRunning,
  email,
  time = 30,
}: TimerProps): [boolean, number] => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    const savedTimestamp = localStorage.getItem(`timer_${email}`);

    if (savedTimestamp) {
      const elapsedTime = Math.floor(
        (Date.now() - Number(savedTimestamp)) / 1000
      );

      if (elapsedTime < time) {
        setSeconds(time - elapsedTime);
        setTimerRunning(true);
      } else {
        setTimerRunning(false);
      }
    }

    if (timerRunning) {
      const interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setTimerRunning(false);
            localStorage.setItem(`timer_${email}`, "terminated");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timerRunning, email, setTimerRunning, time]);

  return [timerRunning, seconds];
};
