import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  justify-content: center;

  @media (max-width: 502px) {
    padding: 0;
  }
`;
