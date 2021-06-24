import { ThemeProvider } from "styled-components";
import { Layout } from "view/Layout";
import { GlobalStyle } from "view/styles/global";
import { darkTheme } from "view/styles/themes/dark";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
