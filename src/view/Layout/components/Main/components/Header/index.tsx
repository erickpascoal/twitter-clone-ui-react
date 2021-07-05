import { Container } from "./styles";

import { WiStars as IconStars } from "react-icons/wi";

export function Header() {
  return (
    <Container>
      <img
        className="user-img"
        src="https://avatars.githubusercontent.com/u/61211253?v=4"
        alt="Avatar"
      />

      <h1>Página Inicial</h1>
      <IconStars />
    </Container>
  );
}
