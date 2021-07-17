import { ReactNode } from "react";

export type ThemeName =  "light" | "dark" | "veryDark" ;

export interface StyleContextProps {
  theme: ThemeName;
  setTheme: (value: ThemeName) => void;
}

export interface StyleProviderProps {
  children: ReactNode;
}
