import {
  Container,
  PostInfo,
  ContainerAuthor,
  AuthorIdentifier,
  PostTime,
  PostContent,
  ContainerPostImage,
} from "./styles";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { ButtonCircle } from "view/components/ButtonCircle";

interface PostProps {
  imageUrl: string;
  text: string;
}

export function Post({ text, imageUrl }: PostProps) {
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

        <PostContent>
          {text}
          <ContainerPostImage>
            <img src={imageUrl} alt="imagem do post" />
          </ContainerPostImage>
        </PostContent>
      </PostInfo>
    </Container>
  );
}
