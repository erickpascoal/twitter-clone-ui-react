import { BoxFooter, BoxHeader, BoxItem, Container } from "./styles";

export function Box() {
  return (
    <Container>
      <BoxHeader>
        <h1>O que está acontecendo</h1>
      </BoxHeader>

      <ul>
        <BoxItem>
          <button>
            Governo Bolsonaro decide suspender contrato da Covaxin após
            suspeitas de irregularidades
          </button>
        </BoxItem>
        <BoxItem>
          <button>Parabéns Kim</button>
        </BoxItem>
        <BoxItem>
          <button>Luba</button>
        </BoxItem>
        <BoxItem>
          <button>ADULTO DE CHUPETA</button>
        </BoxItem>
      </ul>

      <BoxFooter>Mostrar mais</BoxFooter>
    </Container>
  );
}
