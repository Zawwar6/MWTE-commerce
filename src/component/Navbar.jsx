import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full  bg-white">
      <div className="max-w-[90%] mx-auto flex justify-between items-center py-4">
        
        {/* Logo + Menu Items in Same Line */}
        <div className="flex items-center gap-20">
          <h2 className="text-4xl font-bold mt-2">MWT</h2>
          <ul className="hidden md:flex gap-16  items-center mt-3 text-md "> 
            <li><Link to="/" className="hover:text-purple-900 font-bold">HOME</Link></li>
            <li><Link to="/shop" className="hover:text-purple-900 font-bold">SHOP</Link></li>
            <li><Link to="/about" className="hover:text-purple-900 font-bold">ABOUT</Link></li>
            <li><Link to="/contact" className="hover:text-purple-900 font-bold">CONTACT</Link></li>
          </ul>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5 text-2xl mt-3">
          <FiUser className="cursor-pointer hover:text-gray-500" />
          <FiShoppingCart className="cursor-pointer hover:text-gray-500" />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-md py-4">
          <li><Link to="/" className="py-2 text-lg" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/shop" className="py-2 text-lg" onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li><Link to="/about" className="py-2 text-lg" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="py-2 text-lg" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
