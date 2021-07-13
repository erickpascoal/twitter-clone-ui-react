import { useModalContext } from "contexts/modal/ModalContext";
import { ModalProps } from "contexts/modal/types";
import { useRef } from "react";
import { ContainerModal, ModalStyled } from "./styles";

export function Modal({ isOpen, component, title }: ModalProps) {
  const overlayRef = useRef(null);

  const modalContext = useModalContext();

  if (!isOpen) {
    return null;
  }

  return (
    <ContainerModal
      ref={overlayRef}
      tabIndex={-1}
      onClick={(event) => {
        event.stopPropagation();
        if (event.target === overlayRef.current) {
          modalContext.closeModal();
        }
      }}
    >
      <ModalStyled>
        <header>{title}</header>
        <div className="content">{component}</div>
      </ModalStyled>
    </ContainerModal>
  );
}
