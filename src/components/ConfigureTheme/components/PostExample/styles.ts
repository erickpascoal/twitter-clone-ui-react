import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0.5rem;
  max-width: 30rem;
  height: 6.62rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 1rem;
  padding: 0.6rem 1rem;

  display: flex;
  justify-content: flex-start;
  gap: 1rem;

  .post-container {
    div {
      margin-bottom: 0.2rem;

      strong {
        font-weight: 700;
        font-size: 0.935rem;
      }

      span {
        position: relative;
        color: ${({ theme }) => theme.colors.quaternary};
        margin: 0 0.8rem 0 0.2rem;
        font-size: 0.935rem;

        &::after {
          position: absolute;
          content: "";
          background-color: ${({ theme }) => theme.colors.quaternary};
          width: 2px;
          height: 2px;
          top: 55%;
          right: -0.5rem;
        }
      }

      time {
        color: ${({ theme }) => theme.colors.quaternary};
        font-size: 0.935rem;
      }
    }

    p {
      color: ${({ theme }) => theme.colors.fontColor};
      font-size: 0.935rem;

      span {
        /* todo: colocar em variaveis */
        color: #1b95e0;
      }
    }
  }
`;

export const AvatarTwitter = styled.section`
  width: 7rem;
  height: 3rem;
  border-radius: 50%;
  /* todo: colocar cor fixa do twitter */
  background-color: #1da1f2;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 1.5rem;
    fill: #fff;
  }
`;
