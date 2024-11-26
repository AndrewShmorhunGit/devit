import { ThemeOptions } from "@mui/material";

import { ThemeModeEnum } from "@utils/enums/theme";
import { MUI_COMPONENTS_STYLES } from "../components";
import { MUI_PALETTE } from "../palette";
import { MUI_TYPOGRAPHY_STYLES } from "../typography";

const DARK_THEME: ThemeOptions = {
  components: MUI_COMPONENTS_STYLES,
  typography: MUI_TYPOGRAPHY_STYLES,
  palette: MUI_PALETTE[ThemeModeEnum.DARK],
};

const LIGHT_THEME: ThemeOptions = {
  components: MUI_COMPONENTS_STYLES,
  typography: MUI_TYPOGRAPHY_STYLES,
  palette: MUI_PALETTE[ThemeModeEnum.LIGHT],
};

type MuiThemes = { [key in ThemeModeEnum]: ThemeOptions };

export const MUI_THEMES: MuiThemes = {
  [ThemeModeEnum.DARK]: DARK_THEME,
  [ThemeModeEnum.LIGHT]: LIGHT_THEME,
};
