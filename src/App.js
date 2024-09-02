import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container">
        <button onClick={() => setOpen(true)} className="openModal">
          Open Modal
        </button>
        <Modal open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default App;
