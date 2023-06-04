import React from "react";
import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-96">
      <label className="absolute left-[-99999px]">Add Colour Name</label>
      <input
        className="mt-5 p-1 w-full h-14 text-base shadow-2xl rounded-xl outline-none bg-slate-200 placeholder:italic placeholder:text-slate-400 pl-4"
        autoFocus
        type="text"
        placeholder="Colour name / Hex value"
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setIsDarkText(!isDarkText)}
          className="hover:bg-slate-700 text-slate-300 mt-5 py-1 px-4 border border-slate-400 rounded-xl shadow-2xl text-base"
        >
          Toggle Text Colour
        </button>
      </div>
    </form>
  );
};

//w-full mt-2 text-base rounded p-1 text-slate-300

export default Input;
