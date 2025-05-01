import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import FiltredProducts from "./components/filtredProducts/FiltredProducts";
import SingleProduct from "./components/filtredProducts/SingleProduct";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import { useDispatch } from "react-redux";
import { login } from "./features/slices/authSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    if (storedUser && storedUser.authUser) {
      dispatch(login(storedUser));
    }
  }, [dispatch]);
  return (
    <>
      <Navbar />
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
