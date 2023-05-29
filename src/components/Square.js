import React from "react";

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#fff",
      }}
    >
      <h3>{colorValue ? colorValue : "Empty Value"}</h3>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty Colour Value",
};

export default Square;
