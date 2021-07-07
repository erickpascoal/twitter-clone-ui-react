import { ReactNode } from "react";
import { StyleProvider } from "./style/StyleProvider";

interface AppProviderProps {
  children: ReactNode;
}
export function AppProvider({ children }: AppProviderProps) {
  return <StyleProvider>{children}</StyleProvider>;
}
