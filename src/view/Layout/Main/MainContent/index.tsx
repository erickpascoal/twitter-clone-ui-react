import { Post } from "./Post";
import { Container } from "./styles";

export function MainContent() {
  return (
    <Container>
      <Post
        imageUrl="https://conteudo.imguol.com.br/c/entretenimento/5c/2017/08/07/naruto-1502133937412_v2_1024x641.jpg"
        text="Naruto é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila"
      />
      <Post
        imageUrl="https://cdn.ome.lt/SWVfOcqwwPdpa1uZLFfp-SUAqGA=/1200x630/smart/extras/conteudos/conteudo_86894_1.jpg"
        text="As aventuras de um poderoso guerreiro chamado Goku, seu filho Gohan e seus aliados, que se esforçam para defender a Terra das ameaças. Eles são auxiliados por um dragão que concede os desejos de quem quer que reúna as sete Esferas do Dragão."
      />
    </Container>
  );
}
