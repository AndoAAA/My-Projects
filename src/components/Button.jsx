import React from "react";

const Button = (props) => {
  return (
    <button
      className={className("button", { "button--outline": props.outline })}
    >
      {props.children}
    </button>
  );
};

export default Button;
