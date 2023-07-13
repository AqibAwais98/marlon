import React from "react";

function Button({ text, children, variant }) {
  return (
    <button
      className={`${variant} px-6 py-[6px] font-mono font-semibold rounded text-[16px] inline-flex items-center gap-2`}
    >
      {text}
      {children}
    </button>
  );
}

export default Button;
