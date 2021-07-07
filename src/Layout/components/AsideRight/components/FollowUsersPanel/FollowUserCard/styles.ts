import styled from "styled-components";
import { ButtonOutLine } from "components/ButtonOutLine";

export const Container = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 0.75rem;

    strong {
      font-weight: 700;
      font-size: 0.935rem;

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
`;
