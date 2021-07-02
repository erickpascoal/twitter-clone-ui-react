import { ContaineInfo, Container, ContainerImage } from "./styles";

export interface NewsCardProps {
  preTitle: string;
  time: string;
  title: string;
  urlImage?: string;
  description?: string;
  countTweets?: string;
}

export function NewsCard({
  preTitle,
  time,
  title,
  urlImage,
  description,
  countTweets,
}: NewsCardProps) {
  return (
    <Container>
      <ContaineInfo>
        <p>
          {preTitle} . {time}
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
    </Container>
  );
}
