import { BrowserRouter as Router, Route , Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"


import HomePage from "./Pages/HomePage/HomePage"
import ProductsPage from "./Pages/ProductsPage/ProductsPage"
import FilterPage from "./Pages/FilterPage/FilterPage"


function App() {
 

  return (
    <>
    <Router>

    <NavBar/>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/products" element= {<ProductsPage/>}/>
      <Route path="/search/:filtro" element={<FilterPage/>}/>
    </Routes>
   

    </Router>
    
    </>
  )
}

export default App
