import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import FiltredProducts from "./components/filtredProducts/FiltredProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/filtredProducts/:type" element={<FiltredProducts/>}/>
      </Routes>
    </>
  );
}

export default App;
