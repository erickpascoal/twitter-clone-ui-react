import { Box } from "view/components/BoxItem";
import { Container } from "./styles";

export function FollowUsersPanel() {
  const news = [
    'Covid-19: Governo defendeu comprar vacinas da Covax apenas para "grupos de risco", mostra documento',
    'Covid-19: Governo defendeu comprar vacinas da Covax apenas para "grupos de risco", mostra documento',
    'Covid-19: Governo defendeu comprar vacinas da Covax apenas para "grupos de risco", mostra documento',
  ];

  return (
    <Container>
      <Box
        title="Quem seguir"
        items={news}
        showMoreLink="https://google.com.br"
      />
    </Container>
  );
}
