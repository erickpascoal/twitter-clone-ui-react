import { useStyleContext } from "contexts/style/StyleContext";
import { ThemeName } from "contexts/style/types";
import { useCallback } from "react";
import { Container, ThemeOption } from "./styles";

export function ThemeEdit() {
  const styleContext = useStyleContext();

  const handleSetTheme = useCallback((themeName: ThemeName) => {
    styleContext.setTheme(themeName)
  }, [styleContext])


  return (
    <Container>
      <ThemeOption variant="default" onClick={() => handleSetTheme('light')}>
        <input type="checkbox" checked={styleContext.theme === 'light'} />
        <span className="checkmark"></span>
        <p>Padrão</p>
      </ThemeOption>

      <ThemeOption variant="dark">
        <input type="checkbox" />
        <span className="checkmark"></span>
        <p>Um pouco escuro</p>
      </ThemeOption>

      <ThemeOption variant="veryDark" onClick={() => handleSetTheme('dark')}>
        <input type="checkbox" checked={styleContext.theme === 'dark'} />
        <span className="checkmark"></span>
        <p>Superescuro</p>
      </ThemeOption>
    </Container>
  );
}
