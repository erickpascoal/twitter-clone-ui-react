import { transparentize } from "polished";
import styled, { css } from "styled-components";

interface ContainerProps {
  color: string;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;

  .circle {
    width: 2.12rem;
    height: 2.12rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s;
  }

  p {
    font-size: 0.88rem;
    color: ${({ theme }) => theme.colors.quaternary};
    margin-left: 0.3rem;
  }

  &:hover {
    .circle {
      ${({ color }) =>
        css`
          background-color: ${transparentize(0.9, color)};
        `}

      svg {
        transition: all 0.3s;
        fill: ${({ color }) => color};
      }
    }

    p {
      color: ${({ color }) => color};
    }
  }
`;
