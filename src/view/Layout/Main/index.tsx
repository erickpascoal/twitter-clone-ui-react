import { MainContent } from "./MainContent";
import { MainHeader } from "./MainHeader";
import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <MainHeader />
      <MainContent />
    </Container>
  );
}
