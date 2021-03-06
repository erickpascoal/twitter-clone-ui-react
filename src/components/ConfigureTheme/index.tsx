import { Button } from "components/Button";
import { useModalContext } from "contexts/modal/ModalContext";
import { BoxConfig } from "./components/BoxConfig";
import { FontSizeEdit } from "./components/FontSizeEdit";
import { PostExample } from "./components/PostExample";
import { SecondaryColorEdit } from "./components/SecondaryColorEdit";
import { ThemeEdit } from "./components/ThemeEdit";
import { Container } from "./styles";

export function ConfigureTheme() {
  const modalContext = useModalContext();

  function closeModal() {
    modalContext.closeModal();
  }

  return (
    <Container>
      <p>
        Gerencie o tamanho da fonte, a cor e o plano de fundo. Essas
        configurações afetam todas as contas do Twitter neste navegador.
      </p>

      <PostExample />

      <BoxConfig name="Tamanho da fonte">
        <FontSizeEdit />
      </BoxConfig>

      <BoxConfig name="Cor">
        <SecondaryColorEdit />
      </BoxConfig>

      <BoxConfig name="Plano de fundo">
        <ThemeEdit />
      </BoxConfig>

      <footer>
        <Button onClick={closeModal}>Concluído</Button>
      </footer>
    </Container>
  );
}
