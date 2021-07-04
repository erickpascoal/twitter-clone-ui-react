import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { CreatePostArea } from "./components/CreatePostArea";
import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <Header />
      <CreatePostArea />
      <Content />
    </Container>
  );
}
