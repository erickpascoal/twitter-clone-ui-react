import { Container, ThemeOption } from "./styles";

export function ThemeEdit() {
  return (
    <Container>
      <ThemeOption>
        <input type="radio" />
        <div>
          <p>Padrão</p>
        </div>
      </ThemeOption>
      <ThemeOption>
        <input type="radio" />
        <div>
          <p>Um pouco escuro</p>
        </div>
      </ThemeOption>
      <ThemeOption>
        <input type="radio" />
        <div>
          <p>Superescuro</p>
        </div>
      </ThemeOption>
    </Container>
  );
}
