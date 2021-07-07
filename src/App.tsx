import { ThemeProvider } from "styled-components";
import { Layout } from "Layout";
import { GlobalStyle } from "styles/global";
import { darkTheme } from "styles/themes/dark";
import { Home } from "pages/Home";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Home />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
