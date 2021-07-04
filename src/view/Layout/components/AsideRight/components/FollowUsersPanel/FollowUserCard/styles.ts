import styled from "styled-components";
import { ButtonOutLine } from "view/components/ButtonOutLine";

export const Container = styled.div`
  display: flex;
  align-items: center;

  .user-img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  }

  div {
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
