import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer1 from "./components/Footer/Footer";
import { ModeProvider } from "./context/ModeContext";
import { InputProvider } from "./context/InputContext";
import { ButtonProvider } from "./context/ButtonContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { AuthContextProvider } from "./context/AuthContext";

import HomePage from "./Pages/HomePage/HomePage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import FilterPage from "./Pages/FilterPage/FilterPage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignInPage from "./Pages/SignInPage/SignInPage";

function App() {
  return (
    <>
    <AuthContextProvider>

      <ShoppingCartProvider>
        <ModeProvider>
          <InputProvider>
            <ButtonProvider>
              <Router>
                <NavBar />

                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/search/:filtro" element={<FilterPage />} />
                  <Route path="/product/:id" element={<DetailPage />} />
                  <Route path="/category/:club" element={<CategoryPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/user" element={<LoginPage/>}/>
                  <Route path="/signin" element={<SignInPage/>}/>
                </Routes>

                <Footer1 />
              </Router>
            </ButtonProvider>
          </InputProvider>
        </ModeProvider>
      </ShoppingCartProvider>
    </AuthContextProvider>
    </>
  );
}

export default App;
