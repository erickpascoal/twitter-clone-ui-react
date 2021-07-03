import { Container } from "./styles";
import { IoEllipsisHorizontalSharp as IconEllipsis } from "react-icons/io5";

export function Terms() {
  return (
    <Container>
      <div>
        <a href="/#">Termos de Serviço</a>
        <a href="/#">Política de Privacidade</a>
      </div>
      <div>
        <a href="/#">Política de cookies</a>
        <a href="/#">Informações de anúncios</a>
      </div>
      <div>
        <a href="/#">
          Mais <IconEllipsis />
        </a>
        <a href="/#">© 2021 Twitter, Inc.</a>
      </div>
    </Container>
  );
}
