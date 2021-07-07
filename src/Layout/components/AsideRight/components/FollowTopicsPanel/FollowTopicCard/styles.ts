import styled from "styled-components";
import { ButtonCircle } from "components/ButtonCircle";
import { ButtonOutLine } from "components/ButtonOutLine";

export const Container = styled.div`
  display: flex;
  align-items: center;

  div {
    strong {
      font-weight: 700;
      font-size: 0.935rem;
      margin-bottom: 0.2rem;
      &:hover {
        text-decoration: underline;
      }
    }

    p {
      font-size: 0.935rem;
      color: ${({ theme }) => theme.colors.quaternary};
    }
  }
`;

export const ButtonOutLineStyled = styled(ButtonOutLine)`
  margin-left: auto;
  margin-right: 0.3rem;
`;

export const ButtonCircleStyled = styled(ButtonCircle)`
  svg {
    fill: ${({ theme }) => theme.colors.quaternary};
  }
`;
