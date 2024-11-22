import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    if (sortBy && category !== undefined) {
      dispatch(fetchPizzas(sortBy, category));
    }
  }, [dispatch, sortBy, category]);

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
