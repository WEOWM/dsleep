import React from "react";

const CustomButton = ({children, className}) => {
  return (
    <button className={`border px-8 py-2 lg:py-3 rounded-full mt-4 lg:mt-8  duration-500   ${className}`}>
      {children}
    </button>
  );
};

export default CustomButton;
