import React from "react";
import "./layer.css";
const Layer = ({ title, color, paragraph }) => {
  const upStyle = {
    color: color, // Set the text color based on the 'color' prop
  };
  return (
    <section className="head">
      <div className="up" style={upStyle}>
        <span>{title}</span>
        <p>{paragraph}</p>
      </div>
      <div className="bottom">
        <button className="btn1">Order Now</button>
        <button className="btn2">Demo Drive</button>
      </div>
    </section>
  );
};

export default Layer;
