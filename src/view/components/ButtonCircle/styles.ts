import { transparentize } from "polished";
import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 0.5rem;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s;

  svg {
    fill: ${({ theme }) => theme.colors.quaternary};
  }

  &:hover {
    background-color: ${transparentize(0.8, "#1da1f2")};

    svg {
      transition: all 0.3s;
      fill: #1da1f2;
    }
  }
`;
