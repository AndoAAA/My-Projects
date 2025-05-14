import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AllProducts from "./pages/allproducts/AllProducts";
import SingleProduct from "./pages/single product/SingleProduct";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/CheckOut";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
