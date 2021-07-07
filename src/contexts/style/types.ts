import { ReactNode } from "react";

export type ThemeName = "dark" | "light";

export interface StyleContextProps {
  setTheme: (value: ThemeName) => void;
}

export interface StyleProviderProps {
  children: ReactNode;
}
