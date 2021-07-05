import styled from "styled-components";

export const Container = styled.div`
  padding: 0.8rem 1rem;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  position: sticky;
  top: 0;
  z-index: 2;

  display: flex;
  gap: 0.5rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 800;
  }

  .user-img {
    display: none;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  }

  @media (max-width: 500px) {
    .user-img {
      display: block;
    }
  }
`;
