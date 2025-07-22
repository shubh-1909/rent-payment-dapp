// src/components/ui/Button.jsx
import React from "react";

export const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-yellow-500 hover:bg-yellow-600 transition px-4 py-2 rounded-md text-black font-medium shadow-md ${className}`}
    >
      {children}
    </button>
  );
};
