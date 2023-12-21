import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { pageLinks } from "../constants/constants";

const Navigation = () => {
  const [itemAmount, setItemAmount] = useState(0);
  return (
    <nav className="px-12 py-6 flex items-center justify-between">
      {/* Brand Name */}
      <Link to="/" className="">
        <span className="text-3xl font-medium">Classic Studios</span>
      </Link>

      {/* Nav Links */}
      <div className="flex flex-row items-center justify-between border border-gray-200 gap-8 px-6 py-2">
        {pageLinks.map((link) => {
          return (
            <Link
              to={link.path}
              key={link.id}
              className="hover:outline-b hover:outline-b-gray-900 transition 2000s ease-in-out"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {/* Cart Icon and count */}
      <div className="relative w-10 h-10 rounded-full bg-black text-whtite flex items-center justify-center">
        <div className="absolute rounded-full bg-gray-400 text-white z-30 -top-2 -right-2">
          <span className="text-sm flex items-center justify-center w-6 h-6">
            0
          </span>
        </div>
        <div className=" ">
          <Link to="/cart" className="text-white">
            <LuShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
