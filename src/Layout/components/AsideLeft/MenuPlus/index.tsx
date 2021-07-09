import { ButtonStyled, Container, ListMenu, Separetor } from "./styles";
import { RiHome4Fill as IconHome } from "react-icons/ri";
import { memo } from "react";

interface MenuPlusProps {
  isMenuPlusOpen: boolean;
}

function MenuPlus({ isMenuPlusOpen }: MenuPlusProps) {
  if (!isMenuPlusOpen) {
    return null;
  }

  return (
    <Container>
      <ListMenu>
        <li>
          <ButtonStyled>
            <IconHome />
            <span>Tópicos</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconHome />
            <span>Moments</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconHome />
            <span>Boletins informativos</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconHome />
            <span>Anúncios do Twitter</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconHome />
            <span>Estatísticas</span>
          </ButtonStyled>
        </li>
        <li>
          <Separetor />
        </li>
        <li>
          <ButtonStyled>
            <IconHome />
            <span>Configurações e privacidade</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconHome />
            <span>Central de Ajuda</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconHome />
            <span>Exibição</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconHome />
            <span>Teclas de atalho</span>
          </ButtonStyled>
        </li>
      </ListMenu>
    </Container>
  );
}

export default memo(MenuPlus);
