import { Container } from "./styles";

import { WiStars as IconStars } from "react-icons/wi";
import { Avatar } from "components/Avatar";
import { useStyleContext } from "contexts/style/StyleContext";
import { useModalContext } from "contexts/modal/ModalContext";

export function Header() {
  const styleContext = useStyleContext();
  const modalContext = useModalContext();

  function adicionaModal() {
    modalContext.addModal({
      isOpen: true,
      title: "Personalizar sua exibição",
      component: "asdasd",
    });
  }

  return (
    <Container>
      <Avatar
        urlImage="https://avatars.githubusercontent.com/u/61211253?v=4"
        size="2rem"
      />

      <h1>Página Inicial</h1>

      <button onClick={() => styleContext.setTheme("light")}>Claro</button>
      <button onClick={() => styleContext.setTheme("dark")}>Escuro</button>
      <button onClick={adicionaModal}>Modal</button>

      <IconStars />
    </Container>
  );
}
