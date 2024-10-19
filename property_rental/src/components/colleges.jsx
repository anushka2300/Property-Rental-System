import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';

const destinations = [
  { name: 'BSA College', image: './images/colleges/bsa.jpeg' },
  { name: 'GL Bajaj', image: './images/colleges/GL bajaj.jpg' },
  { name: 'GLA University', image: './images/colleges/GLA University.png' },
  { name: 'Rajiv Academy', image: './images/colleges/rajivAcademy.jpeg' },
  { name: 'Sanskriti University', image: './images/colleges/Sanskriti_University_logo.png' },
  { name: 'GLA University', image: './images/colleges/GLA University.png' },
   
];

const Colleges = () => {
  const navigate = useNavigate();
  const handleClick = (collegeName) => {
    const cllg =  collegeName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${cllg}`);
  };

  return (
    <div className="p-4 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Colleges and Universities</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {destinations.map((destination, index) => (
          <div key={index} className="flex items-center bg-green-600 rounded-l-full overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 w-1/3 p-4"  onClick={() => handleClick(destination.name)} >
            <img src={destination.image} alt={destination.name} className="w-24 h-24 rounded-l-full" />
            <p className="text-white text-lg flex-grow pl-4">{destination.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
