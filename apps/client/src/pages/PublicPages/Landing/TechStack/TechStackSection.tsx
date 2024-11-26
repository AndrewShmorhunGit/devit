import React from "react";
import { Box, Container, Grid2 as Grid } from "@mui/material";
import { Section } from "../LandingStyled";
import { useTheme } from "styled-components/macro";
import { IconName } from "@utils/enums/common.enums";
import { Icon } from "@components/Icons/Icon";
import {
  TechDescription,
  TechIconContainer,
  TechCard,
  TechCardContent,
  TechTitle,
} from "./TechStyled";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "@/components/Typography/SectionHeading";

export const TechStackSection = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <Box sx={{ pb: { xs: 1, sm: 2, lg: 4 } }}>
          <SectionHeading title={t("landing.stack.title")} />
        </Box>
        <MemoizedTechStack />
      </Container>
    </Section>
  );
};

const MemoizedTechStack = React.memo(function TechStack() {
  const theme = useTheme();
  const { t } = useTranslation();
  const createTechIcon = (
    iconName: IconName,
    fill: string = theme.palette.primary.main,
    size: number = 86
  ) => <Icon name={iconName} size={size} fill={fill} />;

  const techStack = [
    {
      name: "React",
      logo: createTechIcon(IconName.REACT),
      description: t("landing.stack.descriptions.react"),
      link: "https://reactjs.org/",
    },
    {
      name: "Vite",
      logo: createTechIcon(IconName.VITE),
      description: t("landing.stack.descriptions.vite"),
      link: "https://vitejs.dev/",
    },
    {
      name: "TypeScript",
      logo: createTechIcon(IconName.TYPESCRIPT),
      description: t("landing.stack.descriptions.ts"),
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "RTK Query",
      logo: createTechIcon(IconName.REDUX),
      description: t("landing.stack.descriptions.rtkq"),
      link: "https://redux-toolkit.js.org/rtk-query/overview",
    },
    {
      name: "MUI",
      logo: createTechIcon(IconName.MUI),
      description: t("landing.stack.descriptions.mui"),
      link: "https://mui.com/",
    },
    {
      name: "Styled-components",
      logo: createTechIcon(IconName.STYLED, "transparent"),
      description: t("landing.stack.descriptions.styled"),
      link: "https://styled-components.com/",
    },
    {
      name: "Git",
      logo: createTechIcon(IconName.GIT),
      description: t("landing.stack.descriptions.git"),
      link: "https://git-scm.com/",
    },
    {
      name: "Github Actions",
      logo: createTechIcon(IconName.GITHUB),
      description: t("landing.stack.descriptions.githubActions"),
      link: "https://docs.github.com/en/actions",
    },
    {
      name: "Amazon Web Service",
      logo: createTechIcon(IconName.AWS, theme.palette.text.primary),
      description: t("landing.stack.descriptions.aws"),
      link: "https://aws.amazon.com/",
    },
    {
      name: "Terraform",
      logo: createTechIcon(IconName.TERRAFORM),
      description: t("landing.stack.descriptions.terraform"),
      link: "https://www.terraform.io/",
    },
  ];

  return (
    <Grid container spacing={4}>
      {techStack.map((tech) => (
        <Grid
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          sx={{ zIndex: 10 }}
          key={tech.name}
        >
          <TechCard>
            <TechCardContent>
              <TechIconContainer className="icon">
                {tech.logo}
              </TechIconContainer>
              <TechTitle className="title">{tech.name}</TechTitle>
              <TechDescription className="description">
                {tech.description}
              </TechDescription>
            </TechCardContent>
          </TechCard>
        </Grid>
      ))}
    </Grid>
  );
});
