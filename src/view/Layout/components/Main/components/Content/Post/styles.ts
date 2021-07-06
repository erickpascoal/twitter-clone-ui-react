import styled, { css } from "styled-components";
import { lighten } from "polished";
import { ButtonCircle } from "view/components/ButtonCircle";

export const Container = styled.div`
  padding: 0.9rem 0.5rem 0.4rem 1rem;
  border: solid 1px ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.primary};
  border-top: 0;
  cursor: pointer;

  display: flex;

  transition: background-color 0.2s;

  &:hover {
    ${({ theme }) => css`
      background-color: ${lighten(0.03, theme.colors.primary)};
    `};
  }

  @media (max-width: 500px) {
    border-left: 0;
    border-right: 0;
  }
`;

export const PostInfo = styled.div`
  width: 100%;
  margin-left: 0.75rem;

  display: flex;
  flex-direction: column;
`;

export const ContainerAuthor = styled.div`
  width: 100%;
  margin-bottom: 0.15rem;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ButtonCircleStyled = styled(ButtonCircle)`
  position: absolute;
  top: -0.5rem;
  right: 0;

  svg {
    fill: ${({ theme }) => theme.colors.quaternary};
  }
`;

export const AuthorName = styled.span`
  font-weight: 700;
`;

export const AuthorIdentifier = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.quaternary};
  margin: 0 0.8rem 0 0.2rem;

  &::after {
    position: absolute;
    content: "";
    background-color: ${({ theme }) => theme.colors.quaternary};
    width: 2px;
    height: 2px;
    top: 55%;
    right: -0.5rem;
  }
`;

export const PostTime = styled.span`
  color: ${({ theme }) => theme.colors.quaternary};
`;

export const PostContent = styled.span`
  padding-right: 0.5rem;

  > p {
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: 0.93rem;
  }
`;

export const ContainerPostImage = styled.div`
  margin-top: 1rem;
  max-height: 18.5rem;
  position: relative;
  border-radius: 1rem;
  border: solid 1px ${({ theme }) => theme.colors.borderColor};
  width: 100%;

  overflow: hidden;

  img {
    position: relative;
    max-width: 100%;
    /* min-height: 18.5rem; */
  }
`;

export const ActionsPost = styled.div`
  margin-top: 0.3rem;
  margin-left: -0.4rem;
  max-width: 26.56rem;

  display: flex;
  justify-content: space-between;
`;

export const ButtonActionPost = styled(ButtonCircle)`
  svg {
    fill: ${({ theme }) => theme.colors.quaternary};
  }
`;
