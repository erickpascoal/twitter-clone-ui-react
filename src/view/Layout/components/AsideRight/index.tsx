import { FollowTopicsPanel } from "./components/FollowTopicsPanel";
import { FollowUsersPanel } from "./components//FollowUsersPanel";
import { InputSearch } from "./components/InputSearch";
import { LatestNewsPanel } from "./components/LatestNewsPanel";
import { Terms } from "./components/Terms";
import { Container, ContainerStick } from "./styles";
import ReactStickyBox from "react-sticky-box";

export function AsideRight() {
  return (
    <Container>
      <ReactStickyBox>
        <ContainerStick>
          <InputSearch />
          <LatestNewsPanel />
          <FollowUsersPanel />
          <FollowTopicsPanel />
          <Terms />
        </ContainerStick>
      </ReactStickyBox>
    </Container>
  );
}
