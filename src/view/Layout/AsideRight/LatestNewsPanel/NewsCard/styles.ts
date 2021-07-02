import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const ContaineInfo = styled.div`
  flex: 1;

  p {
    font-size: 0.81rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.quaternary};
    margin-bottom: 0.2rem;

    &.description {
      font-size: 0.938rem;
    }
  }

  strong {
    font-size: 0.93rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.fontColor};
    display: block;
    margin-bottom: 0.3rem;
  }
`;

export const ContainerImage = styled.div`
  max-width: 4.25rem;
  max-height: 4.25rem;
  overflow: hidden;
  border-radius: 1rem;
  text-align: center;

  display: flex;
  justify-content: center;

  img {
    width: 7.5rem;
  }
`;
