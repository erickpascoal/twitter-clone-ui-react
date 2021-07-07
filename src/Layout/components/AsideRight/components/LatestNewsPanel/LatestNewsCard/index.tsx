import {
  ButtonActionEllipsis,
  ContaineInfo,
  Container,
  ContainerImage,
} from "./styles";
import { IoEllipsisHorizontalSharp as IconEllipsis } from "react-icons/io5";

export interface LatestNewsCardProps {
  preTitle: string;
  time: string;
  title: string;
  urlImage?: string;
  description?: string;
  countTweets?: string;
}

export function LatestNewsCard({
  preTitle,
  time,
  title,
  urlImage,
  description,
  countTweets,
}: LatestNewsCardProps) {
  return (
    <Container>
      <ContaineInfo>
        <p>
          {preTitle}

          {!!time && <> . </>}

          {time}
        </p>

        <strong>{title}</strong>

        <p className="description">{description}</p>

        <p>{countTweets}</p>
      </ContaineInfo>

      {urlImage && (
        <ContainerImage>
          <img src={urlImage} alt="notícia" />
        </ContainerImage>
      )}

      {!urlImage && (
        <ButtonActionEllipsis>
          <IconEllipsis />
        </ButtonActionEllipsis>
      )}
    </Container>
  );
}
