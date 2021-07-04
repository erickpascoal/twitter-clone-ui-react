import { transparentize } from "polished";
import styled, { css } from "styled-components";
import { Button } from "view/components/Button";

export const Container = styled.div`
  max-width: 17.18rem;
  width: 100%;
  height: 100vh;
  min-width: 4.5rem;
  padding: 0.2rem 0.75rem;
  position: relative;
  max-height: 100vh;

  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    margin-bottom: 1rem;
  }

  @media (max-width: 1281px) {
    max-width: 4.5rem;
    padding: 0.2rem 2.7rem;
  }
`;

interface MenuItemProps {
  active?: boolean;
}

const itemActive = css`
  button svg {
    fill: ${({ theme }) => theme.colors.secondary};
  }
  button strong {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const MenuItem = styled.li<MenuItemProps>`
  ${({ active }) => active && itemActive}

  & + li {
    margin-top: 0.5rem;
  }

  &:first-child {
    button {
      padding: 0.75rem;
      width: 3rem;
      height: 3rem;
      display: flex;
    }

    svg {
      font-size: 1.8rem;
    }
  }
`;

export const ButtonMenu = styled.button`
  align-items: center;
  border-radius: 99999999rem;
  justify-content: center;
  padding: 0.75rem 0 0.75rem 0;

  transition: all 0.3s;

  div {
    padding: 0 0.75rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-size: 1.5rem;
  }

  strong {
    font-size: 1.25rem;
    font-weight: 700;
    margin-left: 1.3rem;
    margin-right: 0.75rem;
    color: ${({ theme }) => theme.colors.fontColor};
  }

  &:hover {
    ${({ theme }) =>
      css`
        background-color: ${transparentize(0.9, theme.colors.secondary)};
      `}

    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }

    strong {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (max-width: 1281px) {
    strong {
      display: none;
    }
  }
`;

export const ButtonStyled = styled(Button)`
  width: 14.06rem;
  height: 2.87rem;

  strong {
    font-size: 0.935rem;
    font-weight: 700;
    /* todo: colocar em variaveis */
    color: #fff;
  }

  svg {
    display: none;
    fill: #fff;
  }

  @media (max-width: 1281px) {
    width: 2.87rem;

    > strong {
      display: none;
    }

    > svg {
      display: flex;
    }
  }
`;
