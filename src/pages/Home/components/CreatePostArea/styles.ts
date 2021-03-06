import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
  width: 100%;

  @media (max-width: 502px) {
    display: none;
  }
`;

export const ContainerCreatorPosts = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-top: 0;

  display: flex;
`;

export const FormStyled = styled.form`
  width: 100%;
  margin-left: 0.75rem;

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
    font-weight: 700;
    font-size: 0.87rem;

    transition: all 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${transparentize(0.9, "#1da1f2")};
    }

    svg {
      fill: ${({ theme }) => theme.colors.secondary};
      margin-right: 0.5rem;
      font-size: 1.1rem;
    }
  }
`;

export const ContainerSubmit = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  border-top: 1.5px solid ${({ theme }) => theme.colors.borderColor};
  padding-top: 1rem;

  display: flex;
  justify-content: space-between;
`;

export const ListOptionPost = styled.ul`
  display: flex;

  li button svg {
    font-size: 1.4rem;
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Separator = styled.div`
  height: 0.62rem;
  background-color: ${({ theme }) => theme.colors.tertiary};

  border: solid 1px ${({ theme }) => theme.colors.borderColor};
  border-top: 0;
`;
