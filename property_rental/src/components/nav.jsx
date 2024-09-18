import React from 'react';
import { Link } from 'react-router-dom';

const nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-white">
          <Link to="/">RentPro</Link>
        </h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/properties" className="text-white hover:text-gray-300">Properties</Link>
          </li>
          <li>
            <Link to="/aboutus" className="text-white hover:text-gray-300">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          </li>
        </ul>
        <Link to="/login">
          <button className="bg-white text-green-500 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
            Login/Signup
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default nav;
