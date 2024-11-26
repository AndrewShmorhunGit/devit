import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import { Box, Button } from "@mui/material";
import { PAGE_PATH } from "@utils/constants/common.constants";
import { SerializedError } from "@reduxjs/toolkit";
import { SecondaryButton } from "@/components/Buttons/SecondaryButton";
import { H1Typography, H2Typography } from "@components/Typography";
import { FetchApiError } from "@utils/types/api.types";
import { IconName } from "@utils/enums/common.enums";
import { Icon } from "@components/Icons/Icon";

const ButtonsContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  text-align: center;
  padding: 16px;
  height: 100%;
  width: 100%;
`;

const BackgroundWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${({ theme }) => theme.palette.background.paper};
  position: fixed;
  top: 0;
  left: 0;
`;

export type ErrorPageProps = {
  error?: FetchApiError | Error | SerializedError;
};

export const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleToMain = () => {
    navigate(PAGE_PATH.main);
    window.location.reload();
  };

  return (
    <BackgroundWrapper>
      <Container>
        <H1Typography>{t("somethingWrong.header")}</H1Typography>

        <Icon name={IconName.ERROR} size={130} />

        <H2Typography>
          <Trans i18nKey="somethingWrong.body" components={{ br: <br /> }} />
        </H2Typography>

        <ButtonsContainer>
          <Button variant="contained" onClick={handleToMain}>
            {t("general.toMain")}
          </Button>

          <SecondaryButton
            variant="contained"
            href={getMailToSupportHrefLink({
              subject: "Error",
              body: JSON.stringify(error),
            })}
          >
            {t("general.contactSupport")}
          </SecondaryButton>
        </ButtonsContainer>
      </Container>
    </BackgroundWrapper>
  );
};

export const getMailToSupportHrefLink = ({ subject = "", body = "" } = {}) =>
  `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

const SUPPORT_EMAIL =
  import.meta.env.VITE_EMAIL_SUPPORT || "andrew@shmorhun.com";
