
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Company Name */}
        <div className="text-2xl font-bold text-blue-600">
          Property Rental
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">
            Contact Us
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-3 py-1"
          />
        </div>

        {/* Buttons for Login and Signup */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-gray-600 hover:text-blue-600 px-3 py-1"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
