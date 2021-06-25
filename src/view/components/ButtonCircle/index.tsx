import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styles";

interface ButtonCircleProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonCircle({ children, ...rest }: ButtonCircleProps) {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
}
