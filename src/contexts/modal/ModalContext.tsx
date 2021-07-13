import { createContext, useContext } from "react";
import { ModalContextProps } from "./types";

export const ModalContext = createContext({} as ModalContextProps);

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("should be inside a provide");
  }

  return context;
}
