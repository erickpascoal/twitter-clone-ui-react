import { MainContent } from "./components/MainContent";
import { MainHeader } from "./components/MainHeader";
import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <MainHeader />
      <MainContent />
    </Container>
  );
}
