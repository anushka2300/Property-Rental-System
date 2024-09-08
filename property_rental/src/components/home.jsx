import React from 'react';
import Navbar from './nav';
import PropertyCard from './propertyCard';
import Footer from './footer';
import Banner from './banner';
import Colleges from './colleges';

const properties = [
  {
    image: './images/recent1.jpg',
    title: 'Modern Apartment in City Center',
    description: 'A beautiful 2-bedroom apartment located in the heart of the city.',
    price: 1200
  },
  {
    image: './images/recent3.jpeg',
    title: 'Cozy Cottage by the Lake',
    description: 'A charming cottage with stunning views of the lake.',
    price: 800
  },
  {
    image: './images/recent4.jpg',
    title: 'Cozy Cottage by the Lake',
    description: 'A charming cottage with stunning views of the lake.',
    price: 800
  },
  {
    image: './images/recent3.jpeg',
    title: 'Cozy Cottage by the Lake',
    description: 'A charming cottage with stunning views of the lake.',
    price: 800
  },
  {
    image: './images/recent1.jpg',
    title: 'Cozy Cottage by the Lake',
    description: 'A charming cottage with stunning views of the lake.',
    price: 800
  },
  
  // Add more properties here
];

const Home = () => {
  return (
    <>
      <Navbar />
      
        <Banner />
        <div className="relative">
        <header className="absolute inset-0 flex justify-center items-center z-10">
          <div className="flex flex-col justify-center items-center  text-center  text-black border-2 border-solid p-8 max-w-4xl bg-opacity-50 backdrop-blur-md shadow-lg" style={{ transform: 'translateY(-290px)' }}>
            <h1 className="text-5xl font-extrabold mb-4 shadow-lg">
              Find Your Dream Rental Property
            </h1>
            <p className="text-lg font-medium mb-8 shadow-lg">
              Explore the best properties available in the market
            </p>
            <button className="bg-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        </header>
      </div>
      <main className="container mx-auto my-16">
      <Colleges/>
        <h2 className="text-3xl font-extrabold ml-12 mb-12 text-gray-800">Recently Added</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mr-12 gap-2">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
