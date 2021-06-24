import { AsideLeft } from "./AsideLeft";
import { AsideRight } from "./AsideRight";
import { Main } from "./Main";
import { Container } from "./styles";

export function Layout() {
  return (
    <Container>
      <AsideLeft />
      <Main />
      <AsideRight />
    </Container>
  );
}
