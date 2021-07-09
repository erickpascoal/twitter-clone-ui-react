import { ButtonStyled, Container, ListMenu, Separetor } from "./styles";
import { GrChat as IconChat } from "react-icons/gr";
import { BsLightning as IconLightning } from "react-icons/bs";
import { IoNewspaperOutline as IconPaper } from "react-icons/io5";
import { BsBoxArrowInUpRight as IconBoxArrowUpRight } from "react-icons/bs";
import { FiBarChart2 as IconChart } from "react-icons/fi";
import { BsGear as IconGear } from "react-icons/bs";
import { BsQuestionCircle as IconQuestion } from "react-icons/bs";
import { MdBrush as IconBrush } from "react-icons/md";

import { IoIosBody as IconPerson } from "react-icons/io";
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
            <IconChat />
            <span>Tópicos</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconLightning />
            <span>Moments</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconPaper />
            <span>Boletins informativos</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconBoxArrowUpRight />
            <span>Anúncios do Twitter</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconChart />
            <span>Estatísticas</span>
          </ButtonStyled>
        </li>
        <li>
          <Separetor />
        </li>
        <li>
          <ButtonStyled>
            <IconGear />
            <span>Configurações e privacidade</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconQuestion />
            <span>Central de Ajuda</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconBrush />
            <span>Exibição</span>
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled>
            <IconPerson />
            <span>Teclas de atalho</span>
          </ButtonStyled>
        </li>
      </ListMenu>
    </Container>
  );
}

export default memo(MenuPlus);
