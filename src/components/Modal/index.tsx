import { Button } from "components/Button";
import { useRef } from "react";
import { ContainerModal, FutureContent, ModalStyled } from "./styles";

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export function Modal({ isModalOpen, closeModal }: ModalProps) {
  const overlayRef = useRef(null);

  if (!isModalOpen) {
    return null;
  }

  return (
    <ContainerModal
      ref={overlayRef}
      tabIndex={-1}
      onClick={(event) => {
        event.stopPropagation();
        if (event.target === overlayRef.current) {
          closeModal();
        }
      }}
    >
      <ModalStyled>
        <header>Personalizar sua exibição</header>

        <div className="content">
          <FutureContent>
            <p>
              Gerencie o tamanho da fonte, a cor e o plano de fundo. Essas
              configurações afetam todas as contas do Twitter neste navegador.
            </p>

            <div>blab blab bla</div>

            <footer>
              <Button>Concluído</Button>
            </footer>
          </FutureContent>
        </div>
      </ModalStyled>
    </ContainerModal>
  );
}
