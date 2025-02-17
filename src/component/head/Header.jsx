import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="w-full h-[20rem] pt-5 absolute flex justify-between items-start lg:px-10   bg-gradient-to-t
     to-white/100  max-sm:hidden "
      >
        <div className="uppercase font-inter">
          <p className="text-[#0000B5] text-[33px] font-extrabold leading-3">
            Dsleep
          </p>
          <p className="text-[#0000B5] text-[33px] font-extrabold">Company</p>
        </div>

        <div className="capitalize flex space-x-6 ">
          <p className="relative group cursor-pointer">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0000B5] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="relative group cursor-pointer">
            about
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0000B5] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="relative group cursor-pointer">
            service
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0000B5] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="relative group cursor-pointer">
            projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0000B5] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="relative group cursor-pointer">
            contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0000B5] transition-all duration-300 group-hover:w-full"></span>
          </p>
        </div>

        <div className="flex space-x-3">
          <p className="px-1 py-1 flex items-center hover:border duration-300 border-[#0000B5] rounded-full">
            <FaFacebookF />
          </p>
          <p className="px-1 py-1 flex items-center hover:border duration-300 border-[#0000B5] rounded-full">
            <FaInstagram />
          </p>
          <p className="px-1 py-1 flex items-center hover:border duration-300 border-[#0000B5] rounded-full">
            <FaWhatsapp />
          </p>
        </div>
      </div>

      <div className="w-full h-20  hidden max-sm:flex justify-between items-center px-3 pt-2">
        <div className="uppercase font-inter">
          <p className="text-[#0000B5] text-[20px] font-extrabold leading-3">
            Dsleep
          </p>
          <p className="text-[#0000B5] text-[20px] font-extrabold">Company</p>
        </div>

        <div className="text-3xl cursor-pointer " onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {isOpen && (
          <div className="w-[60%] h-96 z-10 bg-white absolute top-19 border-1 rounded-md right-0 flex flex-col justify-around items-start px-2 text-2xl font-bold">
            <p className="relative group cursor-pointer">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0000B5] transition-all duration-300 group-hover:w-full"></span>
            </p>
            <p className="relative group cursor-pointer">
              about
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0000B5] transition-all duration-300 group-hover:w-full"></span>
            </p>
            <p className="relative group cursor-pointer">
              service
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0000B5] transition-all duration-300 group-hover:w-full"></span>
            </p>
            <p className="relative group cursor-pointer">
              projects
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0000B5] transition-all duration-300 group-hover:w-full"></span>
            </p>
            <p className="relative group cursor-pointer">
              contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0000B5] transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
