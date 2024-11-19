// Css
import "./index.css";

// Biblioteca
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import { ProductsPage } from "./pages/prodcuts";

// Componentes
import { Layout } from "./components/menu/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <>
                <Layout>
                  <ProductsPage />
                </Layout>
              </>
            }
          />
          <Route
            path="/produto/edit/:id"
            element={
              <>
                <Layout>
                  <ProductsPage />
                </Layout>
              </>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
