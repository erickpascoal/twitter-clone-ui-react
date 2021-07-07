import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import { darkTheme } from "styles/themes/dark";

interface StyleProps {
  children: ReactNode;
}
export function StyleProvider({ children }: StyleProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
