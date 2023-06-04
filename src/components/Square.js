import React from "react";

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="rounded-xl grid w-96 h-96 border-2 border-none shadow-2xl place-content-center bg-slate-200"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#94a3b8" : "#f8fafc",
      }}
    >
      <h3>{colorValue ? colorValue : "start typing"}</h3>
      <p className="text-center">{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty Colour Value",
};

export default Square;
