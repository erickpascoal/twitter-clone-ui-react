import { Button } from "components/Button";
import { useModalContext } from "contexts/modal/ModalContext";
import { Container } from "./styles";

export function ConfigureTheme() {
  const modalContext = useModalContext();

  return (
    <Container>
      <p>
        Gerencie o tamanho da fonte, a cor e o plano de fundo. Essas
        configurações afetam todas as contas do Twitter neste navegador.
      </p>

      <div>blab blab bla</div>

      <footer>
        <Button onClick={() => modalContext.closeModal()}>Concluído</Button>
      </footer>
    </Container>
  );
}
