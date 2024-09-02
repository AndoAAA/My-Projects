import { IMAGES } from "../images";
import "./style.css";
import React from "react";

export default function Modal({ open, setOpen }) {
  return (
    <>
      {open && (
        <div className="overlay">
          <img src={IMAGES.img} alt="icon" />
          <button className="closeModal" onClick={() => setOpen(false)}>
            X
          </button>
        </div>
      )}
    </>
  );
}
