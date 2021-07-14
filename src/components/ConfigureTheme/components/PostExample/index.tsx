import { AvatarTwitter, Container } from "./styles";
import { ImTwitter as IconTwitter } from "react-icons/im";

export function PostExample() {
  return (
    <Container>
      <AvatarTwitter>
        <IconTwitter />
      </AvatarTwitter>

      <div className="post-container">
        <div>
          <strong>Twitter</strong>
          <span>@twitter</span>
          <time>15 min</time>
        </div>
        <p>
          A essência do Twitter são as mensagens curtas, chamadas de Tweets
          (como este), que podem incluir fotos, vídeos, links, texto e
          <span> #hashtags</span>!
        </p>
      </div>
    </Container>
  );
}
