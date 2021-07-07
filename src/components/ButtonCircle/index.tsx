import { ButtonHTMLAttributes } from "react";
import { useTheme } from "styled-components";
import { Container } from "./styles";

interface ButtonCircleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  extraText?: string;
  color?: string;
  paintChildren?: boolean;
}

export function ButtonCircle({
  children,
  extraText,
  color,
  paintChildren = true,
  ...rest
}: ButtonCircleProps) {
  const theme = useTheme();

  if (!color) {
    color = theme.colors.secondary;
  }

  return (
    <Container color={color} paintChildren={paintChildren} {...rest}>
      <div className="circle">{children}</div>
      {extraText && <p>{extraText}</p>}
    </Container>
  );
}
