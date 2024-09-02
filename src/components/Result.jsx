import React from "react";
import { IMAGES } from "../assets/images";
import "./result.css";
import questions from "../App";

export default function Result({ correct, questions }) {
  return (
    <div className="result">
      <img src={IMAGES.result} alt="result-icon" className="result-img" />
      <h2>
        You guessed {correct} answers out of {questions.length}
      </h2>
      <a href="/">
      <button className="reset">Try again</button>
      </a>
    </div>
  );
}
