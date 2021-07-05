import styled from "styled-components";

export const Container = styled.div`
  padding: 0.8rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary};

  position: fixed;
  bottom: 0;
  z-index: 2;

  display: none;

  @media (max-width: 502px) {
    display: flex;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;

  li button {
    svg {
      fill: ${({ theme }) => theme.colors.quaternary};
      font-size: 1.5rem;
    }

    &.active {
      svg {
        fill: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;

export const ButtonCreatePost = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 5rem;

  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  /* todo: colocar em variaveis */
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 1.5rem;
  }
`;
