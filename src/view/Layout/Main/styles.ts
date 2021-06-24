import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  padding: 1rem;
  border-right: 1.5px solid ${({ theme }) => theme.colors.tertiary};
  border-left: 1.5px solid ${({ theme }) => theme.colors.tertiary};

  h1 {
    font-size: 1.25rem;
  }
`;

export const ContainerCreatorPosts = styled.div`
  padding: 0.5rem 1rem;
  height: 9.81rem;
  border: 1.5px solid ${({ theme }) => theme.colors.tertiary};

  display: flex;

  .avatar-img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  }
`;

export const FormStyled = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  input {
    padding: 1rem 0;
    background-color: transparent;
    border: 0;
    height: 3.25rem;
    font-size: 1.25rem;
  }

  .button-select-visibility {
    background-color: transparent;
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    border: 0;
    min-height: 2rem;
    border-radius: 1rem;
    max-width: 17rem;
    font-weight: 600;
    font-size: 0.87rem;

    transition: all 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${transparentize(0.8, "#1da1f2")};
    }

    svg {
      fill: ${({ theme }) => theme.colors.secondary};
      margin-right: 0.25rem;
    }
  }
`;

export const ContainerSubmit = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  .button-submit {
    height: 2.37rem;
    min-width: 2.5rem;
    padding: 0 1rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.5;
    border-radius: 1.5rem;
    line-height: 1.25rem;

    font-size: 0.93rem;
    font-weight: 600;
    color: #fff;
  }
`;

export const ListOptionPost = styled.ul`
  display: flex;

  li button {
    padding: 0.5rem;
  }

  li button svg {
    font-size: 1.3rem;
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;
