import { ReactNode } from "react";

export type ThemeName = "dark" | "light";

export interface StyleContextProps {
  theme: ThemeName;
  setTheme: (value: ThemeName) => void;
}

export interface StyleProviderProps {
  children: ReactNode;
}
