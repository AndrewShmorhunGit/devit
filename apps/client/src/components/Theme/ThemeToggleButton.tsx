import { IconButton, Box } from "@mui/material";
import { ThemeModeEnum } from "../../utils/enums/theme";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useThemeContext } from "@providers/ThemeProvider";

export const ThemeToggleButton = () => {
  const { themeMode, setThemeMode } = useThemeContext();

  const toggleTheme = () => {
    const newMode =
      themeMode === ThemeModeEnum.LIGHT
        ? ThemeModeEnum.DARK
        : ThemeModeEnum.LIGHT;
    setThemeMode(newMode);
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <IconButton
        onClick={toggleTheme}
        color="primary"
        aria-label="toggle theme"
      >
        {themeMode === ThemeModeEnum.LIGHT ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Box>
  );
};
