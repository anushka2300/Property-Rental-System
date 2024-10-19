import React from 'react';
import { useNavigate } from 'react-router-dom';
const PropertyCard = ({category,collegeName}) => {
  const pgData = [
    {
      name: "IPE HOSTEL",
      description:
        "Located at a distance of 1.8 km from the Dwarka bus stand. Shri Swaminarayan Bhaktidham offers four-bedded AC and non-AC rooms as well as rooms eight ...",
      location: "Nageshwar Road, Near Railway Station Crossing, Dwarka",
      checkIn: "09:00 AM",
      checkOut: "08:00 AM",
      foodFacility: "Yes",
      parking: "Yes",
      category:"Hostels",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtOhDsjj_0GED0k-7mvLg4Wv7pL4jZeK7WQ&s",
    },
    {
      name: "PG Near XYZ Location",
      description:
        "A well-furnished PG with all amenities near XYZ location. Close to bus stops and railway station.",
      location: "XYZ Street, ABC City",
      checkIn: "10:00 AM",
      checkOut: "09:00 AM",
      foodFacility: "No",
      parking: "Yes",
      category:"PG's",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtOhDsjj_0GED0k-7mvLg4Wv7pL4jZeK7WQ&s",
    },
    {
      name: "PG Near XYZ Location",
      description:
        "A well-furnished PG with all amenities near XYZ location. Close to bus stops and railway station.",
      location: "XYZ Street, ABC City",
      checkIn: "10:00 AM",
      checkOut: "09:00 AM",
      foodFacility: "No",
      parking: "Yes",
      category:"Flats",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtOhDsjj_0GED0k-7mvLg4Wv7pL4jZeK7WQ&s",
    },
    {
      name: "PG Near XYZ Location",
      description:
        "A well-furnished PG with all amenities near XYZ location. Close to bus stops and railway station.",
      location: "XYZ Street, ABC City",
      checkIn: "10:00 AM",
      checkOut: "09:00 AM",
      foodFacility: "No",
      parking: "Yes",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtOhDsjj_0GED0k-7mvLg4Wv7pL4jZeK7WQ&s",
    },
  ];
  const navigate = useNavigate();

  function handleClick(name){
    const new_name =  name.toLowerCase().replace(/\s+/g, '-');
     
    navigate(`/${collegeName}/${new_name}`);
  }
  const new_data = category ? pgData.filter(data => data.category === category) : pgData;


  return (
    <div className='cursor-pointer'   >
      {new_data.map((data, index) => (
        <div key={index} className="border-2 border-green-900 shadow-lg p-4 flex space-x-4 items-start mt-6 mx-2.5"  onClick={() => handleClick(data.name)}>
          <div>
            {data.image && (
              <img
                src={data.image}
                alt="Room Image"
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>

          <div className="w-2/3">
            <div className="flex justify-between">
              <div className="space-y-2">
                <h2 className="text-xl font-bold">
                  {data.name}
                </h2>
                <p className="text-sm text-gray-600 max-w-2xl">
                  {data.description}
                </p>
                <ul className="text-sm space-y-1">
                  <li className="text-green-600 font-semibold">{data.location}</li>
                  <li className="text-gray-500">
                    Nageshwar Road, Near Railway Station Crossing, Dwarka 
                     
                  </li>
                </ul>
              </div>

              <div className="text-sm space-y-1">
                <p><span className="text-green-600 font-semibold">Food Facility:</span> {data.foodFacility}</p>
                <p><span className="text-green-600 font-semibold">Parking:</span> {data.parking}</p>
              </div>
            </div>

            <div className="text-right mt-4">
              <button className="text-green-600 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
                SELECT ROOM
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
