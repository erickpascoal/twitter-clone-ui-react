import { transparentize } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 1rem;
  padding-right: 24px;
`;

export const ButtonStyled = styled.button`
  width: 100%;
  border-radius: 99999999rem;
  padding: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all 0.3s;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    ${({ theme }) =>
      css`
        background-color: ${transparentize(0.9, theme.colors.secondary)};
      `}
  }
`;

export const ContainerUserInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .avatar-img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    strong {
      font-size: 0.93rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.fontColor};
    }

    p {
      font-size: 0.93rem;
      color: ${({ theme }) => theme.colors.quaternary};
    }
  }
`;
