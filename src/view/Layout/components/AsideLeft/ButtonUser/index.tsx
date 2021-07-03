import { Container, ContainerUserInfo } from "./styles";
import { ButtonStyled } from "./styles";
import { IoEllipsisHorizontalSharp as IconEllipsis } from "react-icons/io5";

export function ButtonUser() {
  return (
    <Container>
      <ButtonStyled>
        {/* todo:criar componente avatar */}
        <ContainerUserInfo>
          <img
            className="avatar-img"
            src="https://avatars.githubusercontent.com/u/61211253?v=4"
            alt="Avatar"
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
