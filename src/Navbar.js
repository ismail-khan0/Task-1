import React, { useState } from 'react';

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-6">

      <div className="text-2xl font-bold text-yellow-500">Shopy</div>


      <ul className={`flex space-x-8 text-gray-700 ${isMenuOpen ? 'flex-col absolute top-full left-0 bg-white w-full shadow-lg p-4 md:flex md:flex-row md:space-x-8' : 'hidden'} md:flex`}>
        <li className="hover:text-yellow-500 cursor-pointer">Men</li>
        <li className="hover:text-yellow-500 cursor-pointer">Women</li>
        <li className="hover:text-yellow-500 cursor-pointer">Accessories</li>
        <li className="hover:text-yellow-500 cursor-pointer">Summer Sale</li>
        <li className="hover:text-yellow-500 cursor-pointer">Kids</li>
      </ul>

    
      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
          🔍
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          className="text-gray-700"
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'x' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
