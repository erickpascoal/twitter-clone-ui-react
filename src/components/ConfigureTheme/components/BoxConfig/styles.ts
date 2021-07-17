import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 0.75rem;

  > p {
    color: ${({ theme }) => theme.colors.quaternary};
    font-size: 0.812rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }

  > div {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: 1rem;
    padding: 0.5rem 1rem;
  }
`;
