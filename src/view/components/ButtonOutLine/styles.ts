import { darken, transparentize } from "polished";
import styled, { css } from "styled-components";
import { ButtonOutLineProps } from ".";

interface ContainerProps extends Pick<ButtonOutLineProps, "color"> {
  height: string;
  width?: string;
}

export const Container = styled.button<ContainerProps>`
  padding: 0rem 0.935rem;
  height: 2rem;
  font-size: 0.935rem;
  font-weight: 700;
  border: solid 1px ${({ theme }) => theme.colors.secondary};
  border-radius: 9999px;
  ${({ color }) => variantColors[color]}

  display: flex;
  align-items: center;
`;

const variantColors = {
  secondary: css`
    color: ${({ theme }) => theme.colors.secondary};
    border: solid 1px ${({ theme }) => theme.colors.secondary};

    &:hover {
      ${({ theme }) =>
        css`
          background-color: ${transparentize(0.9, theme.colors.secondary)};
        `}
    }
  `,
};
