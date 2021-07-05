import { AsideLeft } from "./components/AsideLeft";
import { AsideRight } from "./components/AsideRight";
import { Main } from "./components/Main";
import { MobileMenu } from "./components/MobileMenu";
import { Container } from "./styles";

export function Layout() {
  return (
    <Container>
      <AsideLeft />
      <Main />
      <AsideRight />
      <MobileMenu />
    </Container>
  );
}
