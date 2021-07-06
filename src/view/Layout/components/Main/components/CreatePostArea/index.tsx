import {
  Container,
  ContainerCreatorPosts,
  ContainerSubmit,
  FormStyled,
  ListOptionPost,
  Separator,
} from "./styles";

import { MdPublic } from "react-icons/md";
import { GoFileMedia } from "react-icons/go";
import { AiOutlineFileGif, AiOutlineCalendar } from "react-icons/ai";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { VscSmiley } from "react-icons/vsc";
import { ButtonCircle } from "view/components/ButtonCircle";
import { Button } from "view/components/Button";
import { Avatar } from "view/components/Avatar";

export function CreatePostArea() {
  return (
    <Container>
      <ContainerCreatorPosts>
        <Avatar
          urlImage="https://avatars.githubusercontent.com/u/61211253?v=4"
          size="3rem"
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
                <ButtonCircle>
                  <GoFileMedia />
                </ButtonCircle>
              </li>
              <li>
                <ButtonCircle>
                  <AiOutlineFileGif />
                </ButtonCircle>
              </li>
              <li>
                <ButtonCircle>
                  <RiBarChartHorizontalFill />
                </ButtonCircle>
              </li>
              <li>
                <ButtonCircle>
                  <VscSmiley />
                </ButtonCircle>
              </li>
              <li>
                <ButtonCircle>
                  <AiOutlineCalendar />
                </ButtonCircle>
              </li>
            </ListOptionPost>

            <Button type="button"> Tweetar </Button>
          </ContainerSubmit>
        </FormStyled>
      </ContainerCreatorPosts>
      <Separator />
    </Container>
  );
}
