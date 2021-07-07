import { Box } from "components/BoxItem";
import { UserFollowCard } from "./FollowUserCard";
import { Container } from "./styles";

export function FollowUsersPanel() {
  const users = [
    {
      name: "Erick Pascoal",
      identity: "@erickpascoal",
      urlImg: "https://avatars.githubusercontent.com/u/61211253?v=4",
    },
    {
      name: "Erick Pascoal",
      identity: "@erickpascoal",
      urlImg: "https://avatars.githubusercontent.com/u/61211253?v=4",
    },
    {
      name: "Erick Pascoal",
      identity: "@erickpascoal",
      urlImg: "https://avatars.githubusercontent.com/u/61211253?v=4",
    },
  ];

  const items = users.map((user) => <UserFollowCard userFollow={user} />);

  return (
    <Container>
      <Box
        title="Quem seguir"
        items={items}
        showMoreLink="https://google.com.br"
      />
    </Container>
  );
}
