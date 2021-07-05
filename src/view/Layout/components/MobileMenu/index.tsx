import { ButtonCreatePost, Container, MenuList } from "./styles";
import { BiSearch as IconSearch } from "react-icons/bi";
import { VscBell as IconBell } from "react-icons/vsc";
import { BiEnvelope as IconEnvelope } from "react-icons/bi";
import { RiHome4Fill as IconHome } from "react-icons/ri";
import { GiFeather as IconFeather } from "react-icons/gi";

export function MobileMenu() {
  return (
    <Container>
      <ButtonCreatePost>
        <IconFeather />
      </ButtonCreatePost>

      <MenuList>
        <li>
          <button className="active">
            <IconHome />
          </button>
        </li>
        <li>
          <button>
            <IconSearch />
          </button>
        </li>
        <li>
          <button>
            <IconBell />
          </button>
        </li>
        <li>
          <button>
            <IconEnvelope />
          </button>
        </li>
      </MenuList>
    </Container>
  );
}
