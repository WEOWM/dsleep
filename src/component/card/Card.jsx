import React, { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Card = ({ content, isdep, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col max-sm:h-[15rem] justify-center items-center rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gray-300 ${className}`}
    >
      <IoCheckmarkCircleOutline
        size={29}
        className={`transition-transform duration-300 ${
          isHovered ? "scale-125 text-[#0000B5]" : ""
        }`}
      />
      <p className="font-bold mt-6 transition-colors duration-300 hover:text-[#0000B5]">
        {content?.heading}
      </p>
      {isdep && <p className="w-[10rem] text-center text-gray-600 transition-colors duration-300 hover:text-gray-800">
        {content?.dep}
      </p>   }
     
    </div>
  );
};

export default Card;
