import { format } from "date-fns";

export const formatSeconds = (seconds: number) => {
  const milliseconds = seconds * 1000;
  return format(new Date(milliseconds), "mm:ss");
};
