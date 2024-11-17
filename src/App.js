import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => {
        dispatch(setPizzas(data.pizzas));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
