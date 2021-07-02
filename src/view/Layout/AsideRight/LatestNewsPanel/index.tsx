import { Box } from "view/components/BoxItem";
import { NewsCard } from "./NewsCard";
import { Container } from "./styles";

export function LatestNewsPanel() {
  const newsList = [
    {
      preTitle: "Covid 19",
      time: "AO VIVO",
      title:
        'Covid-19: Governo defendeu comprar vacinas da Covax apenas para "grupos de risco", mostra documento',
      urlImage:
        "https://conteudo.imguol.com.br/c/entretenimento/5c/2017/08/07/naruto-1502133937412_v2_1024x641.jpg",
    },
    {
      preTitle: "Covid 19",
      time: "AO VIVO",
      title:
        'Covid-19: Governo defendeu comprar vacinas da Covax apenas para "grupos de risco", mostra documento',

      description:
        "Força, Bruna! Segundo o Extra, atriz e Enzo Celulari terminaram o namoro Coração partido",
      countTweets: "23,2 mil tweets",
    },
  ];

  const items = newsList.map((news) =>
    news?.urlImage ? <NewsCard {...news} /> : <NewsCard {...news} />
  );

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
