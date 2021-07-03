import styled from "styled-components";

export const Container = styled.div`
  div {
    display: flex;
    gap: 0.75rem;
    padding: 0 1rem;

    a {
      font-size: 0.81rem;
      color: ${({ theme }) => theme.colors.quaternary};

      &:hover {
        text-decoration: underline;
      }

      svg {
        margin-bottom: -0.15rem;
        font-size: 0.7rem;
        fill: ${({ theme }) => theme.colors.quaternary};
        margin-right: 0.2rem;
      }
    }
  }
`;
