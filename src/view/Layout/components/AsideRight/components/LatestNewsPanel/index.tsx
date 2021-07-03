import { Box } from "view/components/BoxItem";
import { LatestNewsCard } from "./LatestNewsCard";
import { Container } from "./styles";

export function LatestNewsPanel() {
  const newsList = [
    {
      preTitle: "Copa América",
      time: "Noite anterior",
      title:
        "Em jogo tenso e com um a menos, Brasil vence Chile e avança para as semis",
      urlImage:
        "https://conteudo.imguol.com.br/c/entretenimento/5c/2017/08/07/naruto-1502133937412_v2_1024x641.jpg",
    },
    {
      preTitle: "Política",
      time: "Assunto do Momento",
      title: "É HOJE",
      countTweets: "225 mil Tweets",
    },
    {
      preTitle: "Assunto do Momento em Brasil",
      time: "",
      title: "É O FLUXO",
      countTweets: "3.330 Tweets",
    },
    {
      preTitle: "Brasil",
      time: "há 2 horas",
      title:
        "Protestos contra Bolsonaro acontecem em diversas cidades do Brasil",
      urlImage:
        "https://conteudo.imguol.com.br/c/entretenimento/5c/2017/08/07/naruto-1502133937412_v2_1024x641.jpg",
    },
  ];

  const items = newsList.map((news) => <LatestNewsCard {...news} />);

  return (
    <Container>
      <Box
        title="O que está acontecendo"
        items={items}
        showMoreLink="https://google.com.br"
      />
    </Container>
  );
}
