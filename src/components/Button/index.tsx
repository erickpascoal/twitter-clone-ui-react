import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: string;
  width?: string;
}

export function Button({
  children,
  style,
  height = "2.37rem",
  width,
  ...rest
}: ButtonProps) {
  return (
    <Container width={width} height={height} {...rest}>
      {children}
    </Container>
  );
}
