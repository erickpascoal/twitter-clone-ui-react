import { ReactNode } from "react";
import { ModalProvider } from "./modal/ModalProvider";
import { StyleProvider } from "./style/StyleProvider";

interface AppProviderProps {
  children: ReactNode;
}
export function AppProvider({ children }: AppProviderProps) {
  return (
    <StyleProvider>
      <ModalProvider>{children}</ModalProvider>
    </StyleProvider>
  );
}
