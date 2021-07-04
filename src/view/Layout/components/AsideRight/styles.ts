import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 21.75rem;
  margin-left: 1.5rem;

  @media (max-width: 1095px) {
    max-width: 18rem;
  }

  @media (max-width: 1005px) {
    display: none;
  }
`;

export const ContainerStick = styled.div`
  padding-top: 3.8rem;
  padding-bottom: 7rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
