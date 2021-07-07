import { createContext, useContext } from "react";
import { StyleContextProps } from "./types";

export const StyleContext = createContext({} as StyleContextProps);

export function useStyleContext() {
  const context = useContext(StyleContext);

  if (!context) {
    throw new Error("should be inside a provide");
  }

  return context;
}
