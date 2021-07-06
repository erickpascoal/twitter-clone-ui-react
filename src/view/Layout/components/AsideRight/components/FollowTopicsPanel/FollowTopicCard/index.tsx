import { ButtonCircleStyled, ButtonOutLineStyled, Container } from "./styles";

import { VscChromeClose as IconTimes } from "react-icons/vsc";

interface TopicFollow {
  name: string;
  description: string;
}

interface FollowTopicCardProps {
  topicFollow: TopicFollow;
}

export function FollowTopicCard({ topicFollow }: FollowTopicCardProps) {
  return (
    <Container>
      <div>
        <strong>{topicFollow.name}</strong>
        <p>{topicFollow.description}</p>
      </div>

      <ButtonOutLineStyled color="secondary">Seguir</ButtonOutLineStyled>

      <ButtonCircleStyled paintChildren={false}>
        <IconTimes />
      </ButtonCircleStyled>
    </Container>
  );
}
