import { transparentize } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  margin-top: auto;

  display: flex;
  justify-content: center;
`;

export const ButtonStyled = styled.button`
  width: 100%;
  border-radius: 99999999rem;
  padding: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all 0.3s;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    ${({ theme }) =>
      css`
        background-color: ${transparentize(0.9, theme.colors.secondary)};
      `}
  }

  @media (max-width: 1281px) {
    justify-content: center;
    align-items: center;
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;

    /* padding: 0.5rem; */

    svg {
      display: none;
    }
  }
`;

export const ContainerUserInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 0.75rem;

    strong {
      font-size: 0.93rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.fontColor};
    }

    p {
      font-size: 0.93rem;
      color: ${({ theme }) => theme.colors.quaternary};
    }
  }

  @media (max-width: 1281px) {
    justify-content: center;

    div {
      display: none;
    }
  }
`;
