import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import FiltredProducts from "./components/filtredProducts/FiltredProducts";
import SingleProduct from "./components/filtredProducts/SingleProduct";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filtredProducts/:type" element={<FiltredProducts />} />
        <Route path="/filtredProducts/:type/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
