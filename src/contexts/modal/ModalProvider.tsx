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
      <Modal isModalOpen={modal.isOpen} closeModal={closeModal} />
      {children}
    </ModalContext.Provider>
  );
}
