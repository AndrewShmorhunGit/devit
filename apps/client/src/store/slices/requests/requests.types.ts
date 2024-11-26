export type RequestsState = {
  requestCount: number;
  responseCount: number;
  isLoading: boolean;
  isCanceled: boolean;
  log: RequestLogType[];
  stopTimestamp: number | null;
};

export type RequestLogType = {
  index: number;
  startTime: number | null;
  endTime: number | null;
};
