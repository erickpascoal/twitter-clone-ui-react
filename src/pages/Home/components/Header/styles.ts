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

  img {
    display: none;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 800;
  }

  svg {
    fill: ${({ theme }) => theme.colors.secondary};
    font-size: 2rem;
    margin-left: auto;
  }

  @media (max-width: 500px) {
    img {
      display: block;
    }
  }
`;
