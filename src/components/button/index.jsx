import React from "react";

function Button({ text, children, variant }) {
  return (
    <button
      className={`${variant}  font-Devanagari text-[16px] inline-flex items-center`}
    >
      {text}
      <span className="-mt-1">{children}</span>
    </button>
  );
}

export default Button;
