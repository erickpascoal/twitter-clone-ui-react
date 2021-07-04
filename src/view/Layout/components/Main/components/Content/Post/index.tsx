import {
  Container,
  PostInfo,
  ContainerAuthor,
  AuthorIdentifier,
  PostTime,
  PostContent,
  ContainerPostImage,
  AuthorName,
  ActionsPost,
  ButtonActionPost,
  ButtonActionEllipsis,
} from "./styles";
import { IoEllipsisHorizontalSharp as IconEllipsis } from "react-icons/io5";
import { AiOutlineRetweet as IconRetweet } from "react-icons/ai";
import { FaRegComment as IconComment } from "react-icons/fa";
import { BsHeart as IconHeart } from "react-icons/bs";
import { BsUpload as IconUpload } from "react-icons/bs";
import { useTheme } from "styled-components";

interface PostProps {
  text: string;
  imageUrl?: string;
}

export function Post({ text, imageUrl }: PostProps) {
  const theme = useTheme();

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
            <AuthorName>Erick</AuthorName>
            <AuthorIdentifier>@erickpascoal</AuthorIdentifier>
            <PostTime>29 min</PostTime>
          </div>

          <ButtonActionEllipsis>
            <IconEllipsis />
          </ButtonActionEllipsis>
        </ContainerAuthor>

        <PostContent>
          <p>{text}</p>

          {imageUrl && (
            <ContainerPostImage>
              <img src={imageUrl} alt="imagem do post" />
            </ContainerPostImage>
          )}

          <ActionsPost>
            <ButtonActionPost extraText="726">
              <IconComment />
            </ButtonActionPost>

            <ButtonActionPost color={theme.colors.sharingColor} extraText="512">
              <IconRetweet />
            </ButtonActionPost>

            <ButtonActionPost color={theme.colors.likeColor} extraText="35 mil">
              <IconHeart />
            </ButtonActionPost>

            <ButtonActionPost>
              <IconUpload />
            </ButtonActionPost>
          </ActionsPost>
        </PostContent>
      </PostInfo>
    </Container>
  );
}
