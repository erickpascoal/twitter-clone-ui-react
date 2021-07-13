import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  title: ReactNode;
  component: ReactNode;
}

export interface ModalContextProps {
  addModal: (modal: ModalProps) => void;
  closeModal: () => void;
}

export interface ModalProviderProps {
  children: ReactNode;
}
