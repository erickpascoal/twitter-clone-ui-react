import { THEME_KEY } from "constants/localStorage";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import { darkTheme } from "styles/themes/dark";
import { lightTheme } from "styles/themes/light";
import { veryDarkTheme } from "styles/themes/veryDark";
import { usePersistedState } from "utils/usePersistedState";
import { StyleContext } from "./StyleContext";
import { StyleProviderProps, ThemeName } from "./types";

export function StyleProvider({ children }: StyleProviderProps) {
  const [theme, setTheme] = usePersistedState<ThemeName>(THEME_KEY, "veryDark");

  const themes = {
    light: lightTheme,
    dark: darkTheme,
    veryDark: veryDarkTheme,
  };

  return (
    <StyleContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyleContext.Provider>
  );
}
