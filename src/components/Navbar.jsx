import React, { useState } from "react";
import { FaBars, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import me from "../assets/fd.png";
import ScrollComp from "./ScrollComp";
import ScrollComp2 from "./ScrollComp2";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const handleBarClick = () => {
    setHamburgerMenu((boolean) => !boolean);
  };
  function handleListClick(val) {
    setHamburgerMenu(val);
  }

  return (
    
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          key={Math.random}
          src={me}
          alt="Me"
          className="rounded-full md:w-[150px] md:h-[150px] w-[100px] h-[100px]"
        />
      </div>
      {/* menu */}
      <ul className="md:flex hidden">
          <ScrollComp2 />

      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleBarClick}>
        {!hamburgerMenu && <FaBars />}
        {hamburgerMenu && <AiOutlineClose />}
      </div>
      {/* Mobile Menu */}
      {hamburgerMenu && (
        <ul onClick={handleBarClick} className="pointer absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-8 text-4xl">
        <ScrollComp onTouch={handleListClick}/>
        </ul>
      )}

      {/* Social Icons*/}
      <div className="lg:flex hidden fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-500 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/fatihdonmezz/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-500 bg-[#333333]">
            <a
              href="https://github.com/fatihdonmezdev"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-500 bg-[#6f2cb0]">
            <a
              href="mailto:fatihd1512@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Gmail <FaEnvelope size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
