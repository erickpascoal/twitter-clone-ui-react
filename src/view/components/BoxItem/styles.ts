import { lighten } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.div``;

export const BoxHeader = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 1rem 1rem 0 0;
  background-color: ${({ theme }) => theme.colors.tertiary};

  h1 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.fontColor};
    font-weight: 800;
  }
`;

export const BoxItem = styled.li`
  display: block;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-top: solid 1px ${({ theme }) => theme.colors.borderColor};

  &:last-child {
    border-bottom: solid 1px ${({ theme }) => theme.colors.borderColor};
  }

  &:hover {
    ${({ theme }) => css`
      background-color: ${lighten(0.03, theme.colors.tertiary)};
    `};
  }

  > button {
    padding: 0.75rem 1rem;
    width: 100%;
    height: 100%;
    text-align: left;
  }
`;

export const BoxFooter = styled.a`
  width: 100%;
  padding: 1rem;
  border-radius: 0 0 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.secondary};

  display: flex;

  font-size: 0.93rem;

  &:hover {
    ${({ theme }) => css`
      background-color: ${lighten(0.03, theme.colors.tertiary)};
    `};
  }
`;
