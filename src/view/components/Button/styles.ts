import { darken } from "polished";
import styled, { css } from "styled-components";

interface ContainerProps {
  height: string;
  width?: string;
}

export const Container = styled.button<ContainerProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => (width ? width : null)};
  min-width: 2.5rem;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 1.5rem;
  line-height: 1.25rem;

  font-size: 0.93rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontColor2};

  transition: background-color 0.3s;

  &:hover {
    ${({ theme }) => css`
      background-color: ${darken(0.08, theme.colors.secondary)};
    `}
  }
`;
