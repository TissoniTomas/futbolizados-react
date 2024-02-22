import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer1 from "./components/Footer/Footer";
import { ModeProvider } from "./context/ModeContext";
import { InputProvider } from "./context/InputContext";

import HomePage from "./Pages/HomePage/HomePage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import FilterPage from "./Pages/FilterPage/FilterPage";
import DetailPage from "./Pages/DetailPage/DetailPage";

function App() {
  return (
    <>
      <ModeProvider>
        <InputProvider>
          <Router>
            <NavBar />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/search/:filtro" element={<FilterPage />} />
              <Route path="/product/:id" element={<DetailPage />} />
            </Routes>

            <Footer1 />
          </Router>
        </InputProvider>
      </ModeProvider>
    </>
  );
}

export default App;
