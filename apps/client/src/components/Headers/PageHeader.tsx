import React from "react";
import { ThemeToggleButton } from "@components/Theme/ThemeToggleButton";
import { Box, Divider, IconButton } from "@mui/material";
import { MEDIA_BREAKPOINT } from "@utils/constants/media.constants";
import { FlexBox } from "@/styles/styled/boxes";
import styled, { useTheme } from "styled-components/macro";
import { IconName } from "@/utils/enums/common.enums";
import { Icon } from "../Icons/Icon";
import { Link, useLocation } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { LogoutButton } from "../Buttons/LogoutButton";
import { LanguageSelect } from "../Selects/LanguageSelect";
import { AUTH_ROUTES } from "@/utils/constants/common.constants";

const StyledOptionsBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media ${MEDIA_BREAKPOINT["768"]} {
    gap: 1rem;
  }
  @media ${MEDIA_BREAKPOINT["480"]} {
    gap: 8px;
  }
`;

const StyledHeaderContainer = styled(FlexBox)`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;

  @media ${MEDIA_BREAKPOINT["768"]} {
    padding-top: 12px;
  }
  @media ${MEDIA_BREAKPOINT["480"]} {
    padding-top: 8px;
  }
`;

const BackToLandingButton = () => {
  const location = useLocation();

  if (!AUTH_ROUTES.includes(location.pathname)) return null;

  return (
    <IconButton
      component={Link}
      to="/"
      color="primary"
      aria-label="Back to Landing"
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
};

export function PageHeader(): React.ReactNode {
  const theme = useTheme();

  return (
    <Box sx={{ zIndex: 10 }}>
      <StyledHeaderContainer>
        <FlexBox>
          <Icon
            name={IconName.MAIN}
            size={32}
            fill={theme.palette.primary.main}
          />
        </FlexBox>
        <StyledOptionsBox>
          <BackToLandingButton />
          <LogoutButton />
          <ThemeToggleButton />
          <LanguageSelect />
        </StyledOptionsBox>
      </StyledHeaderContainer>
      <Divider sx={{ pt: 1 }} />
    </Box>
  );
}
