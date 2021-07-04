import { ButtonMenu, ButtonStyled, Container, MenuItem } from "./styles";

import { ImTwitter as IconTwitter } from "react-icons/im";
import { RiHome4Fill as IconHome } from "react-icons/ri";
import { FiHash as IconHash } from "react-icons/fi";
import { VscBell as IconBell } from "react-icons/vsc";
import { VscBookmark as IconBookMark } from "react-icons/vsc";
import { BiEnvelope as IconEnvelope } from "react-icons/bi";
import { RiFileListLine as IconList } from "react-icons/ri";
import { FaRegUser as IconUser } from "react-icons/fa";
import { IoEllipsisHorizontalCircle as IconEllipsis } from "react-icons/io5";
import { ButtonUser } from "./ButtonUser";

export function AsideLeft() {
  return (
    <Container>
      <div className="wrapper">
        <ul>
          <MenuItem>
            <ButtonMenu>
              <IconTwitter />
            </ButtonMenu>
          </MenuItem>
          <MenuItem active={true}>
            <ButtonMenu>
              <div>
                <IconHome />
                <strong>Página Inicial</strong>
              </div>
            </ButtonMenu>
          </MenuItem>
          <MenuItem>
            <ButtonMenu>
              <div>
                <IconHash />
                <strong>Explorar</strong>
              </div>
            </ButtonMenu>
          </MenuItem>
          <MenuItem>
            <ButtonMenu>
              <div>
                <IconBell />
                <strong>Notificações</strong>
              </div>
            </ButtonMenu>
          </MenuItem>
          <MenuItem>
            <ButtonMenu>
              <div>
                <IconEnvelope />
                <strong>Mensagens</strong>
              </div>
            </ButtonMenu>
          </MenuItem>
          <MenuItem>
            <ButtonMenu>
              <div>
                <IconBookMark />
                <strong>Itens salvos</strong>
              </div>
            </ButtonMenu>
          </MenuItem>
          <MenuItem>
            <ButtonMenu>
              <div>
                <IconList />
                <strong>Listas</strong>
              </div>
            </ButtonMenu>
          </MenuItem>
          <MenuItem>
            <ButtonMenu>
              <div>
                <IconUser />
                <strong>Perfil</strong>
              </div>
            </ButtonMenu>
          </MenuItem>
          <MenuItem>
            <ButtonMenu>
              <div>
                <IconEllipsis />
                <strong>Mais</strong>
              </div>
            </ButtonMenu>
          </MenuItem>
        </ul>

        <ButtonStyled type="button">
          <strong>Tweetar</strong>
          <IconUser />
        </ButtonStyled>

        <ButtonUser />
      </div>
    </Container>
  );
}
