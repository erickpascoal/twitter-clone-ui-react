import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

export interface ButtonOutLineProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: string;
  width?: string;
  color: "secondary";
}

export function ButtonOutLine({
  children,
  height = "2rem",
  width,
  color = "secondary",
  ...rest
}: ButtonOutLineProps) {
  return (
    <Container color={color} width={width} height={height} {...rest}>
      {children}
    </Container>
  );
}
