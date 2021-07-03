import { ButtonOutLineStyled, Container } from "./styles";

interface UserFollow {
  name: string;
  identity: string;
  urlImg: string;
}

interface UserFollowCardProps {
  userFollow: UserFollow;
}

export function UserFollowCard({ userFollow }: UserFollowCardProps) {
  return (
    <Container>
      <img className="user-img" src={userFollow.urlImg} alt="Avatar" />

      <div>
        <strong>{userFollow.name}</strong>
        <p>{userFollow.identity}</p>
      </div>

      <ButtonOutLineStyled color="secondary">Seguir</ButtonOutLineStyled>
    </Container>
  );
}
