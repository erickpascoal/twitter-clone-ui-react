import { Container, ContainerUserInfo } from "./styles";
import { ButtonStyled } from "./styles";
import { IoEllipsisHorizontalSharp as IconEllipsis } from "react-icons/io5";
import { Avatar } from "components/Avatar";

export function ButtonUser() {
  return (
    <Container>
      <ButtonStyled>
        <ContainerUserInfo>
          <Avatar
            urlImage="https://avatars.githubusercontent.com/u/61211253?v=4"
            size="2.5rem"
          />

          <div>
            <strong>Erick</strong>
            <p>@erickpascoal</p>
          </div>
        </ContainerUserInfo>
        <IconEllipsis />
      </ButtonStyled>
    </Container>
  );
}
