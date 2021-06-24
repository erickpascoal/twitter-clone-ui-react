import {
  Container,
  ContainerCreatorPosts,
  ContainerSubmit,
  FormStyled,
  Header,
  ListOptionPost,
} from "./styles";

import { MdPublic } from "react-icons/md";
import { GoFileMedia } from "react-icons/go";
import { AiOutlineFileGif, AiOutlineCalendar } from "react-icons/ai";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { VscSmiley } from "react-icons/vsc";

export function Main() {
  return (
    <Container>
      <Header>
        <h1>Página Inicial</h1>
      </Header>

      <ContainerCreatorPosts>
        <img
          className="avatar-img"
          src="https://avatars.githubusercontent.com/u/61211253?v=4"
          alt="Avatar"
        />

        <FormStyled>
          <input placeholder="O que está acontecendo ?" type="text" />
          <button className="button-select-visibility" type="button">
            <MdPublic />
            Qualquer pessoa pode responder
          </button>

          <ContainerSubmit>
            <ListOptionPost>
              <li>
                <button>
                  <GoFileMedia />
                </button>
              </li>
              <li>
                <button>
                  <AiOutlineFileGif />
                </button>
              </li>
              <li>
                <button>
                  <RiBarChartHorizontalFill />
                </button>
              </li>
              <li>
                <button>
                  <VscSmiley />
                </button>
              </li>
              <li>
                <button>
                  <AiOutlineCalendar />
                </button>
              </li>
            </ListOptionPost>

            <button className="button-submit" type="button">
              Tweetar
            </button>
          </ContainerSubmit>
        </FormStyled>
      </ContainerCreatorPosts>
    </Container>
  );
}
