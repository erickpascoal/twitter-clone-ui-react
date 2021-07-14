import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 1rem;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const ThemeOption = styled.button`
  width: 100%;
  height: 3.87rem;
  background-color: #fff;
  border-radius: 0.2rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  div {
    width: 100%;

    display: flex;
    justify-content: center;
  }
`;
