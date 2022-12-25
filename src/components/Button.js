import React from "react";

function Button({ text, color }) {
  return (
    <button
      className={` px-5 py-1 rounded-md shadow-lg hover:shadow-none transition-all hover:opacity-70 ${
        color === "primary"
          ? "bg-primary text-white"
          : color === "danger"
          ? "bg-red text-white"
          : '"bg-white"'
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
