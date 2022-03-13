import React from "react";
import "./input.css";

const Input = ({ type, ID, name, classes, handleChange }) => {
  return (
    <div>
      <input type={type} id={ID} name={name} className={" " + classes} onChange={handleChange}/>
    </div>
  );
};

export default Input;
