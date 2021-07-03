import styled, { css } from "styled-components";

interface ContainerProps {
  isFocus: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #202327;
  border-radius: 99999px;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  border-style: solid;
  border-width: 1px;

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
