import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem 0.5rem 1rem 1rem;
  border: solid 1px ${({ theme }) => theme.colors.borderColor};
  border-top: 0;

  display: flex;

  .user-img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  }
`;

export const PostInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ContainerAuthor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  div {
    margin-top: 0.5rem;
  }
`;

export const AuthorIdentifier = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.quaternary};
  margin: 0 1rem 0 0.5rem;

  &::after {
    position: absolute;
    content: "";
    background-color: ${({ theme }) => theme.colors.quaternary};
    width: 2px;
    height: 2px;
    top: 55%;
    right: -0.6rem;
  }
`;

export const PostTime = styled.span`
  color: ${({ theme }) => theme.colors.quaternary};
`;
