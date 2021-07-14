import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  /* todo: colocar em variaveis */
  background-color: #5b708366;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalStyled = styled.div`
  width: 37.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
  z-index: 200;

  > header {
    color: ${({ theme }) => theme.colors.fontColor};
    font-weight: 800;
    font-size: 1.43rem;
    text-align: center;
    padding: 2rem 2rem 1rem 2rem;
  }

  .content {
    padding: 0 2rem 2rem 2rem;
  }
`;
