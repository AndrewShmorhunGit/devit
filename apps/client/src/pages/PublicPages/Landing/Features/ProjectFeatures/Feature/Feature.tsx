import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
} from "./StyledFeature";
import { Link } from "@/components/Link/Link";
import { Body1Typography } from "@/components/Typography";
import { Divider } from "@mui/material";
import styled from "styled-components/macro";

const FeatureNumber = styled(Body1Typography)`
  font-weight: 700 !important;
  color: inherit !important;
  opacity: 0.7;
  margin-right: 1rem !important;
`;

const LearnMoreLink = styled(Link)`
  position: absolute;
  bottom: -1rem;
  right: 1rem;
  font-size: 12px;
  z-index: 10;
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

type FeatureParams = {
  title: string;
  descriptionKey: string;
  link: string;
  index: number;
};

export const Feature = ({
  title,
  descriptionKey,
  link,
  index,
}: FeatureParams) => {
  const { t } = useTranslation();
  return (
    <StyledAccordion>
      <StyledAccordionSummary
        expandIcon={
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <ExpandMoreIcon />
          </motion.div>
        }
      >
        <FeatureNumber>{index < 10 ? `0${index}` : index}</FeatureNumber>
        <Body1Typography sx={{ fontWeight: "inherit" }}>
          {title}
        </Body1Typography>
      </StyledAccordionSummary>
      <Divider />
      <StyledAccordionDetails>
        <ReactMarkdown>{t(descriptionKey)}</ReactMarkdown>

        <LearnMoreLink
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "12px",
          }}
        >
          {t("features.learnMore")}
        </LearnMoreLink>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};
