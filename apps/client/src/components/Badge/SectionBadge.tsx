import { Badge, Box } from "@mui/material";
import { Subtitle2Typography } from "../Typography";
import styled from "styled-components/macro";
import { IconName } from "@/utils/enums/common.enums";
import { Icon } from "../Icons/Icon";
import { useTranslation } from "react-i18next";

const StyledBadge = styled(Badge)`
  position: absolute !important;
  top: 8px;
  left: 8px;
  background: transparent;
  z-index: 10;
  padding: 0 8px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 2rem;
`;

const InnerBadgeContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

type SectionBadgeProps = {
  iconName: IconName;
};

export function SectionBadge({ iconName }: SectionBadgeProps) {
  const { t } = useTranslation();
  return (
    <StyledBadge>
      <InnerBadgeContainer>
        <Icon name={iconName as IconName} />
        <Subtitle2Typography>{t("landing.badge.iconName")}</Subtitle2Typography>
      </InnerBadgeContainer>
    </StyledBadge>
  );
}
