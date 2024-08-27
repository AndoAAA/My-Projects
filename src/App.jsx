import "./App.css";
import Header from "./components/header";
import Router from "./routes/router";
import Footer from "./components/footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "./libs/redux/product-slice/product-slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getBasketDataByStorage());
  }, []);

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
