import { Layout } from "Layout";
import { Home } from "pages/Home";
import { AppProvider } from "contexts";

function App() {
  return (
    <AppProvider>
      <Layout>
        <Home />
      </Layout>
    </AppProvider>
  );
}

export default App;
