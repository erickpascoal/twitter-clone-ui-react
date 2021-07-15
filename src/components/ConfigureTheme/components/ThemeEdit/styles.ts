import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 1rem;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

interface ThemeOptionProps {
  variant: 'default' | 'dark' | 'veryDark'
}

export const ThemeOption = styled.label<ThemeOptionProps>`
  width: 100%;
  height: 3.87rem;
  border-radius: 0.2rem;
  padding: 0 0.5rem;
  border: solid 1px ${({ theme }) => theme.colors.borderColor};
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;


  &:hover .checkmark::before {
    content: '';
    background-color: ${({ theme }) => theme.colors.borderColor};
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    opacity: 0.2;
  }

  input:checked ~ .checkmark::before {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    height: 1.5rem;
    width: 1.5rem;
    background-color: transparent;
    border-radius: 50%;
    border: solid 2px ${({ theme }) => theme.colors.borderColor};

    display: flex;
    align-items: center;
    justify-content: center;
}

  input:checked ~ .checkmark {
    background-color: #2196F3;
    border: 0;
  }

  .checkmark:after {
    content: "";
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    margin-top: -3px;
    margin-left: -1px;
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(35deg);
    -ms-transform: rotate(35deg);
    transform: rotate(35deg);
  }

   p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 6rem; 
    font-weight: 600;
  }

  ${({ variant }) => themeOptionVariants[variant]};

`;

const themeOptionVariants = {
  default: css`
    background-color: #ffffff;
    
    .checkmark {
      border: solid 2px #b9cad3
    };
    
    p {
      color: #0f1419;
    }
  `,
  dark: css`
    background-color: #15202b;

    .checkmark {
      border: solid 2px #6b7d8c
    };
    
  `,
  veryDark: css`
    background-color: #000000;

    .checkmark {
      border: solid 2px #3d4145
    };
  `
}

