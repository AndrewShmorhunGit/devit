import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { enUS } from "@mui/material/locale";
import {
  ThemeProvider as MuiThemeProvider,
  Theme,
  createTheme,
} from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components/macro";
import { ThemeModeEnum } from "../utils/enums/theme";
import { GlobalStyle } from "@styles/GlobalStyle";
import { CssBaseline } from "@mui/material";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { getLocalStorageItem } from "@utils/functions/storage/local";
import { MUI_THEMES } from "@/styles/theme";

type ThemeModeContextType = {
  themeMode: ThemeModeEnum;
  setThemeMode: (theme: ThemeModeEnum) => void;
  theme: Theme;
};

const STORAGE_THEME_MODE_VARIABLE = "themeMode";

const INITIAL_THEME_MODE =
  (getLocalStorageItem(STORAGE_THEME_MODE_VARIABLE) as ThemeModeEnum) ??
  ThemeModeEnum.DARK;

const ThemeContext = createContext<ThemeModeContextType | undefined>(undefined);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useLocalStorageState<ThemeModeEnum>(
    STORAGE_THEME_MODE_VARIABLE,
    INITIAL_THEME_MODE
  );

  const theme = useMemo(() => createTheme(MUI_THEMES[mode], enUS), [mode]);

  const handleSetMode = useCallback(
    (themeMode: ThemeModeEnum) => {
      setMode(themeMode);
    },
    [setMode]
  );

  const contextValue = useMemo(
    () => ({
      themeMode: mode,
      setThemeMode: handleSetMode,
      theme,
    }),
    [mode, handleSetMode, theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          <CssBaseline />
          {children}
        </StyledThemeProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeModeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
