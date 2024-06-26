import React, { memo } from 'react';
import { Link } from "react-router-dom";

import { IoBookSharp } from "react-icons/io5";
import { FaRegBell, FaRegMoon } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = memo(() => {
  return (
    <header>
      <nav className="container flex items-center justify-between py-5">
        <Link to="/" className="flex gap-2 items-center">
          <IoBookSharp className="w-8 h-8" />

          <span className="font-bold uppercase">book rental</span>
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <a 
              className="block bg-primary/20 p-1 rounded-lg backdrop-blur-[2px]"
              href="#"
            >
              <FaRegBell />
            </a>
          </li>

          <li>
            <a 
              className="block bg-primary/20 p-1 rounded-lg backdrop-blur-[2px]"
              href="#"
            >
              <FaRegMoon />
            </a>
          </li>

          <li>
            <a 
              className="block bg-primary/20 p-1 rounded-lg backdrop-blur-[2px]"
              href="#"
            >
              <MdOutlineShoppingCart />

              <span
                className="absolute top-[-12px] left-[12px] text-white w-[25px] h-[25px] bg-[#12cf6f] rounded-full flex justify-center items-center"
              >
                26
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
})

export default Header