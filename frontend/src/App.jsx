import Home from "./pages/home.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetails from "./pages/productDetails.jsx"
import CartProducts from "./pages/cart.jsx"
import Register from "./forms/register.jsx"
import Login from "./forms/login.jsx"

export default function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category/:cateName" element={<Home />} />
          <Route path="/:category/:cateName/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartProducts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
