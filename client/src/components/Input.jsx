import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="w-80 p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Input;
