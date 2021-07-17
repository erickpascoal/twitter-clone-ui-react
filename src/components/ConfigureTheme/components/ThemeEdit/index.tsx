import { useStyleContext } from "contexts/style/StyleContext";
import { ThemeName } from "contexts/style/types";
import { useCallback } from "react";
import { Container, ThemeOption } from "./styles";

export function ThemeEdit() {
  const styleContext = useStyleContext();

  const handleSetTheme = useCallback(
    (themeName: ThemeName) => {
      styleContext.setTheme(themeName);
    },
    [styleContext]
  );

  return (
    <Container>
      <ThemeOption
        variant="default"
        onClick={() => handleSetTheme("light")}
        isSelected={styleContext.theme === "light"}
      >
        <input type="checkbox" checked={styleContext.theme === "light"} />
        <span className="checkmark"></span>
        <p>Padrão</p>
      </ThemeOption>
      <ThemeOption
        variant="dark"
        onClick={() => handleSetTheme("dark")}
        isSelected={styleContext.theme === "dark"}
      >
        <input type="checkbox" checked={styleContext.theme === "dark"} />
        <span className="checkmark"></span>
        <p>Um pouco escuro</p>
      </ThemeOption>
      <ThemeOption
        variant="veryDark"
        onClick={() => handleSetTheme("veryDark")}
        isSelected={styleContext.theme === "veryDark"}
      >
        <input type="checkbox" checked={styleContext.theme === "veryDark"} />
        <span className="checkmark"></span>
        <p>Superescuro</p>
      </ThemeOption>
    </Container>
  );
}
