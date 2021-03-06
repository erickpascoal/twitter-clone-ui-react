import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: 21.75rem;
  width: 100%;
  padding: 0.2rem 0;

  position: fixed;
  top: 0;
  z-index: 3;

  @media (max-width: 1095px) {
    max-width: 18rem;
  }
`;

interface ContainerProps {
  isFocus: boolean;
}

export const ContainerInput = styled.div<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.backgroudInputSearch};
  border-radius: 99999px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  width: 100%;

  ${({ isFocus }) =>
    !!isFocus ? variantInput.isFocused : variantInput.default};

  input {
    width: 100%;
    padding: 0.75rem 0.85rem;
    background-color: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.colors.quaternary};
    }
  }
`;

const variantInput = {
  default: css`
    border-color: ${({ theme }) => theme.colors.primary};

    svg {
      fill: ${({ theme }) => theme.colors.quaternary};
    }
  `,
  isFocused: css`
    border-color: ${({ theme }) => theme.colors.secondary};

    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  `,
};
