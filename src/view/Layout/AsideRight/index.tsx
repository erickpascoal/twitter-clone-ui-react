import { InputSearch } from "./InputSearch";
import { LatestNews } from "./LatestNews";
import { Container } from "./styles";

export function AsideRight() {
  return (
    <Container>
      <InputSearch />
      <LatestNews />
    </Container>
  );
}
