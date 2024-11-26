import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import {
  MenuItem,
  FormControl as MuiFormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Locales } from "@/utils/enums/common.enums";
import { MEDIA_BREAKPOINT } from "@/utils/constants/media.constants";

const FormControl = styled(MuiFormControl)`
  font-family: Lato;
  fieldset {
    border-color: ${({ theme }) => theme.palette.primary.main} !important;
    border-width: 1px;
  }

  &:hover fieldset {
    border-color: ${({ theme }) => theme.palette.primary.dark} !important;
  }

  @media ${MEDIA_BREAKPOINT["768"]} {
    transform: scale(0.9);
  }

  @media ${MEDIA_BREAKPOINT["480"]} {
    transform: scale(0.8);
  }
`;

export const LanguageSelect = () => {
  const { i18n, t } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  const menuItems = Object.values(Locales).map((locale) => (
    <MenuItem key={locale} value={locale}>
      {t("general.currentLanguage", { lng: locale })}
    </MenuItem>
  ));

  return (
    <FormControl size="small">
      <Select
        id="language-select"
        value={i18n.language}
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            style: { position: "absolute" },
          },
        }}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
};
