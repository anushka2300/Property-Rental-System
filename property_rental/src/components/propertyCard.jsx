import React from 'react';

const PropertyCard = ({ image, title, description, price }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out w-64 ml-12">
      <img src={image} alt={title} className="w-full h-40 object-cover transition-transform duration-500 ease-in-out hover:scale-110"/>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>
        <p className="text-green-600 font-bold mt-3 text-md">${price}/month</p>
        <button className="mt-3 bg-green-500 text-white px-3 py-1.5 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out text-sm">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;
