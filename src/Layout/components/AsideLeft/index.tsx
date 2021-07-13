import { ButtonMenu, ButtonStyled, Container, MenuItem } from "./styles";

import { ImTwitter as IconTwitter } from "react-icons/im";
import { RiHome4Fill as IconHome } from "react-icons/ri";
import { FiHash as IconHash } from "react-icons/fi";
import { VscBell as IconBell } from "react-icons/vsc";
import { VscBookmark as IconBookMark } from "react-icons/vsc";
import { BiEnvelope as IconEnvelope } from "react-icons/bi";
import { RiFileListLine as IconList } from "react-icons/ri";
import { FaRegUser as IconUser } from "react-icons/fa";
import { GiFeather as IconFeather } from "react-icons/gi";
import { IoEllipsisHorizontalCircle as IconEllipsis } from "react-icons/io5";
import { ButtonUser } from "./ButtonUser";
import MenuPlus from "./MenuPlus";
import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";

export function AsideLeft() {
  const [isMenuPlusOpen, setIsMenuOpenPlus] = useState(false);
  const menuPlusRef = useRef<any>(null);

  const listenerClick = useCallback((event: any) => {
    event.stopPropagation();

    if (menuPlusRef?.current && !menuPlusRef.current.contains(event.target)) {
      setIsMenuOpenPlus(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", listenerClick);

    // todo: remover evento
    // return document.removeEventListener("click", listenerClick);
  }, [listenerClick]);

  const closeMenuPlus = useCallback(() => {
    setIsMenuOpenPlus(false);
  }, []);

  return (
    <Container>
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
          <ButtonMenu ref={menuPlusRef} onClick={() => setIsMenuOpenPlus(true)}>
            <div>
              <IconEllipsis />
              <strong>Mais</strong>
            </div>

            <MenuPlus
              isMenuPlusOpen={isMenuPlusOpen}
              onCloseMenuPlus={closeMenuPlus}
            />
          </ButtonMenu>
        </MenuItem>
      </ul>

      <ButtonStyled type="button">
        <strong>Tweetar</strong>
        <IconFeather />
      </ButtonStyled>

      <ButtonUser />
    </Container>
  );
}
