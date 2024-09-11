import "./styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
