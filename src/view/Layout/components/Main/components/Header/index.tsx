import { Container } from "./styles";

import { WiStars as IconStars } from "react-icons/wi";
import { Avatar } from "view/components/Avatar";

export function Header() {
  return (
    <Container>
      <Avatar
        urlImage="https://avatars.githubusercontent.com/u/61211253?v=4"
        size="2rem"
      />

      <h1>Página Inicial</h1>

      <IconStars />
    </Container>
  );
}
