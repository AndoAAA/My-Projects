import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Router from "./routes/router";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SideBar />
        <Router/>
      </div>
      <Footer />
    </>
  );
}

export default App;
