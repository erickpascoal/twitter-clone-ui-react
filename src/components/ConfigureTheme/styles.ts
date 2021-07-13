import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.quaternary};
    font-size: 0.937rem;
  }

  footer {
    display: block;
    margin-top: 2rem;
  }
`;
