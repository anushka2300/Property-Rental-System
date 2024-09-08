import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-white">RentPro</h1>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Properties</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">About us</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
        <button className="bg-white text-green-500 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
          Login/Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
