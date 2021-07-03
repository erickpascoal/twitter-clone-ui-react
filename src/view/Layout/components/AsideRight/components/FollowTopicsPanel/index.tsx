import { Box } from "view/components/BoxItem";
import { FollowTopicCard } from "./FollowTopicCard";
import { Container } from "./styles";

export function FollowTopicsPanel() {
  const topics = [
    {
      name: "Naruto",
      description: "Série de mangá",
    },
    {
      name: "Alan Ferreira",
      description: "Criador digital",
    },
    {
      name: "Universo Marvel",
      description: "Universo ficcional",
    },
    {
      name: "ONE PIECE",
      description: "Franquia de mangá e anime",
    },
    {
      name: "Indústria de gaming",
      description: "Gaming",
    },
  ];

  const items = topics.map((topic) => <FollowTopicCard topicFollow={topic} />);

  return (
    <Container>
      <Box
        title="Tópicos para seguir"
        items={items}
        showMoreLink="https://google.com.br"
      />
    </Container>
  );
}
