import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/store/store.hooks";
import {
  cancelRequests,
  resetRequestCount,
  setStopTimestamp,
} from "@/store/slices/requests/requests.slice";
import { processQueue } from "@/store/slices/requests/requests.thunk";
import {
  selectLoadingRequests,
  selectResponseCount,
} from "@/store/slices/requests/requests.selectors";
import { cancelQueue } from "@/utils/helpers/requests.helpers";
import { FlexBox } from "@styles/styled/boxes";
import { FormContainer } from "../../PublicPages/Auth/AuthForm/StyledAuthForm";
import { ProgressCircles } from "@/pages/PrivatePages/Dashboard/Progress/ProgressCircles";
import { PersistentTimer } from "./Timer/Timer";
import { ReportDialog } from "./Report/ReportDialog";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";

import { Field } from "@utils/enums/common.enums";
import { AmountFormValuesType } from "@/utils/schemas/requests.schemas";
import { AmountForm } from "./AmountForm/AmountForm";

export const TOTAL_REQUESTS = 1000;

export default function Dashboard() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectLoadingRequests);
  const responseCount = useAppSelector(selectResponseCount);
  const [isReportOpen, setIsReportOpen] = useState(false);

  const handleOpenReport = useCallback(() => setIsReportOpen(true), []);
  const handleCloseReport = useCallback(() => setIsReportOpen(false), []);

  const handleSubmit = useCallback(
    (values: AmountFormValuesType) => {
      const concurrencyLimit = values[Field.NUMBER];
      dispatch(resetRequestCount());
      dispatch(processQueue(concurrencyLimit));
    },
    [dispatch]
  );

  const handleStop = useCallback(() => {
    dispatch(setStopTimestamp());
    dispatch(cancelRequests());
    toast.warning("Requests stopped by user.");
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(cancelQueue());
    };
  }, [dispatch]);

  return (
    <>
      <FlexBox sx={{ position: "relative" }}>
        <FormContainer
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FlexBox sx={{ flexDirection: "column", gap: 2 }}>
            <AmountForm
              isLoading={isLoading}
              onSubmit={handleSubmit}
              onStop={handleStop}
            />
            {responseCount > 0 && <ProgressCircles total={TOTAL_REQUESTS} />}
            {responseCount > 0 && <PersistentTimer isActive={isLoading} />}
            <FlexBox>
              {!isLoading && responseCount > 0 && (
                <PrimaryButton onClick={handleOpenReport}>
                  {t("general.report")}
                </PrimaryButton>
              )}
            </FlexBox>
            <ReportDialog open={isReportOpen} onClose={handleCloseReport} />
          </FlexBox>
        </FormContainer>
      </FlexBox>
      {/* <AnimatedBackground isLoading={isLoading} /> */}
    </>
  );
}
