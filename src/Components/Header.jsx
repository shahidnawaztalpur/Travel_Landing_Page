import React, { useState } from "react";
import Logo from "../assets/images/Logo.png"
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [language, setLanguage] = useState("English")

  const handleChange = (event) => {
    setLanguage(event.target.value);
  }
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-[9999]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={Logo} alt="Logo Image" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <NavLink 
          to=""
          className={({isActive}) =>
          `px-3 py-2 rounded-md transition 
          ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-600"}`
          }
          >
            Destinations
          </NavLink>

          <NavLink 
          to="/hotels"
          className={({isActive}) =>
          `px-3 py-2 rounded-md transition 
          ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-600"}`
          }
          >
            Hotels
          </NavLink>

          <NavLink 
          to="/flight"
          className={({isActive}) =>
          `px-3 py-2 rounded-md transition 
          ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-600"}`
          }
          >
            Flight's
          </NavLink>

          <NavLink 
          to="/booking"
          className={({isActive}) =>
          `px-2 py-2 rounded-md transition 
          ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-600"}`
          }
          >
            Booking
          </NavLink>

          <NavLink 
          to="/Login"
          className={({isActive}) =>
          `px-2 py-2 rounded-md transition 
          ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-600"}`
          }
          >
            Login
          </NavLink>
          <button className="border-2 border-gray-800 px-2 rounded-md">Sign Up</button>
          
          <select 
          value={language}
          onChange={handleChange}
          className='bg-white text-gray-700 rounded-md px-2 py-1'
          >
            <option value="English">EN</option>
            <option value="Urdu">UR</option>
            <option value="Arabic">AR</option>
          </select>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-2 hover:bg-gray-100"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-2 hover:bg-gray-100"
            >
              About
            </NavLink>
            <NavLink
              to="/properties"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-2 hover:bg-gray-100"
            >
              Properties
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-2 hover:bg-gray-100"
            >
              Contact
            </NavLink>
          </div>
        )}
    </header>
  );
};

export default Header;
