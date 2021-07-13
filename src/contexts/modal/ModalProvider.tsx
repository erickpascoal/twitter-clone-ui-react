import { useState } from "react";
import { ModalContext } from "./ModalContext";
import { Modal } from "components/Modal";
import { ModalProps, ModalProviderProps } from "./types";

export function ModalProvider({ children }: ModalProviderProps) {
  const [modal, setModal] = useState({} as ModalProps);

  const addModal = (newModal: ModalProps) => {
    setModal(newModal);
  };

  const closeModal = () => {
    setModal({} as ModalProps);
  };

  return (
    <ModalContext.Provider value={{ addModal, closeModal }}>
      <Modal
        isOpen={modal.isOpen}
        title={modal.title}
        component={modal.component}
      />
      {children}
    </ModalContext.Provider>
  );
}
