import React from "react";
import "./game.css";

export default function Game({ step, question, onClickVariant }) {

    const percentage = Math.round((step / question.length) * 100);

  return (
    <div className="container">
      <div className="progress">
        <div style={{ width: `${percentage}%` }}></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li key={text} onClick={() => onClickVariant(index)}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
