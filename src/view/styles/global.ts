import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		outline: none;
		box-sizing: border-box;
		color: ${({ theme }) => theme.colors.fontColor};
	}

	html {
		background-color: ${({ theme }) => theme.colors.primary};	
	}

	html, body, #root {
    width: 100%;
    height: 100%;
  }

  ul {
  list-style: none;
	}

	button, a {
		cursor: pointer;
		background-color: transparent;
		border: 0;
	}


	* {
		font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
	}
`;
