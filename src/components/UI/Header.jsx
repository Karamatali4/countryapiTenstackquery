import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Header = () => {
  // State to manage the Header's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the Header's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "country Flag", url: "/countryflag" },
  ];

  return (
    <div className=" header bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      {/* Logo */}
      <NavLink to={"/"}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      </NavLink>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4  hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            <NavLink to={item.url}>{item.text}</NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <NavLink to={item.url}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
