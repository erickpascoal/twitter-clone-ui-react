import { Container } from "./styles";

import { WiStars as IconStars } from "react-icons/wi";
import { Avatar } from "components/Avatar";
import { useStyleContext } from "contexts/style/StyleContext";

export function Header() {
  const styleContext = useStyleContext();

  return (
    <Container>
      <Avatar
        urlImage="https://avatars.githubusercontent.com/u/61211253?v=4"
        size="2rem"
      />

      <h1>Página Inicial</h1>

      <button onClick={() => styleContext.setTheme("light")}>Claro</button>
      <button onClick={() => styleContext.setTheme("dark")}>Escuro</button>

      <IconStars />
    </Container>
  );
}
