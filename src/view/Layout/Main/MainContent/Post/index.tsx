import {
  Container,
  PostInfo,
  ContainerAuthor,
  AuthorIdentifier,
  PostTime,
} from "./styles";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { ButtonCircle } from "view/components/ButtonCircle";

export function Post() {
  return (
    <Container>
      <img
        className="user-img"
        src="https://avatars.githubusercontent.com/u/61211253?v=4"
        alt="Avatar"
      />

      <PostInfo>
        <ContainerAuthor>
          <div>
            <strong>Erick</strong>
            <AuthorIdentifier>@erickpascoal</AuthorIdentifier>
            <PostTime>29 min</PostTime>
          </div>

          <ButtonCircle>
            <IoEllipsisHorizontalSharp />
          </ButtonCircle>
        </ContainerAuthor>
        <div>
          Equipped with high-definition cameras, @Astro_Kimbrough & @Thom_Astro
          will venture outside the @Space_Station to continue installing new,
          roll-up solar arrays. Calendário Don’t miss the action tomorrow, June
          25. Watch LIVE at 6:30am ET (10:30 UT): http://nasa.gov/live
        </div>
      </PostInfo>
    </Container>
  );
}
