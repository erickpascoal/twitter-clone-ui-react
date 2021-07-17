import { ReactNode } from "react";
import { Container } from "./styles";

interface BoxConfigProps {
  children: ReactNode;
  name: string;
}

export function BoxConfig({ children, name }: BoxConfigProps) {
  return (
    <Container>
      <p>{name}</p>
      <div>{children}</div>
    </Container>
  );
}
