import { PrimaryButton } from "@components/Buttons/PrimaryButton";
import { Body1Typography, H1Typography } from "@components/Typography";
import { Link as RouterLink } from "react-router-dom";
import { useTypingEffect } from "./hooks/useTypeEffect";
import { StyledHeroSection } from "./HeroStyled";
import { useTranslation } from "react-i18next";
import { FlexBox } from "@/styles/styled/boxes";
import { useTheme } from "styled-components/macro";

export const HeroSection = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const typingText = useTypingEffect(t("landing.project.title"), 120);
  return (
    <StyledHeroSection theme={theme}>
      <H1Typography gutterBottom>{typingText}</H1Typography>
      <Body1Typography gutterBottom>
        {t("landing.project.description")}
      </Body1Typography>
      <FlexBox sx={{ justifyContent: "flex-start", gap: 2 }}>
        <PrimaryButton component={RouterLink} to="/login" size="large">
          {t("landing.project.button")}
        </PrimaryButton>
      </FlexBox>
    </StyledHeroSection>
  );
};
