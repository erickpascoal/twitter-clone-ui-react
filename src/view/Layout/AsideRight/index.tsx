import { FollowTopicsPanel } from "./FollowTopicsPanel";
import { FollowUsersPanel } from "./FollowUsersPanel";
import { InputSearch } from "./InputSearch";
import { LatestNewsPanel } from "./LatestNewsPanel";
import { Container } from "./styles";

export function AsideRight() {
  return (
    <Container>
      <InputSearch />
      <LatestNewsPanel />
      <FollowUsersPanel />
      <FollowTopicsPanel />
    </Container>
  );
}
