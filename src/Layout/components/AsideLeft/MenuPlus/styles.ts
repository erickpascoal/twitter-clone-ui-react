import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.section`
  width: 15.62rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.2rem;
  box-shadow: 0px 0.1px 8px 0.1px ${({ theme }) => theme.colors.quaternary};

  position: absolute;
  top: -26.4rem;
  left: -0.8rem;
`;

export const ListMenu = styled.ul`
  li {
    &:first-child,
    &:last-child {
      button {
        border-radius: 0.2rem;
      }
    }
  }
`;

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.fontColor};

  display: flex;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => lighten(0.01, theme.colors.tertiary)};
  }

  > svg {
    fill: ${({ theme }) => theme.colors.borderColor}!important;
    width: 1rem;
    height: 1rem;
    margin-right: 0.75rem;
  }

  > span {
    font-size: 0.935rem;
    fill: ${({ theme }) => theme.colors.fontColor};
  }
`;

export const Separetor = styled.div`
  padding: 0 0.2rem;
  position: relative;

  &::after {
    content: "";
    background-color: ${({ theme }) => theme.colors.borderColor};
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
