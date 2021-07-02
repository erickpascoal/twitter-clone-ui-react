import { ReactNode } from "react";
import { BoxFooter, BoxHeader, BoxItem, Container } from "./styles";

interface BoxProps {
  title: string;
  items: ReactNode[];
  showMoreLink: string;
}

export function Box({ title, items, showMoreLink }: BoxProps) {
  return (
    <Container>
      <BoxHeader>
        <h1>{title}</h1>
      </BoxHeader>

      <ul>
        {items.map((item) => (
          <BoxItem>
            <button>{item}</button>
          </BoxItem>
        ))}
      </ul>

      <BoxFooter target="blank" href={showMoreLink}>
        Mostrar mais
      </BoxFooter>
    </Container>
  );
}
