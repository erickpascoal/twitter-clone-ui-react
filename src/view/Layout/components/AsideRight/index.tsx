import { FollowTopicsPanel } from "./components/FollowTopicsPanel";
import { FollowUsersPanel } from "./components//FollowUsersPanel";
import { InputSearch } from "./components/InputSearch";
import { LatestNewsPanel } from "./components/LatestNewsPanel";
import { Terms } from "./components/Terms";
import { Container } from "./styles";

export function AsideRight() {
  return (
    <Container>
      <InputSearch />
      <LatestNewsPanel />
      <FollowUsersPanel />
      <FollowTopicsPanel />
      <Terms />
    </Container>
  );
}
