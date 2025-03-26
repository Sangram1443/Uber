import React from 'react';
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = ({ onSelectLocation }) => {
  const locations = [
    "Chhatrapati Shivaji Maharaj Terminus",
    "Indira Gandhi International Airport",
    "Bangalore Kempegowda International Airport",
    "Rashtrapati Bhavan New Delhi",
    "Howrah Junction Railway Station",
    "Victoria Memorial Kolkata West Bengal",
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <div
          key={index}
          className="flex gap-4 border-2 p-3 mx-2 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
          onClick={() => onSelectLocation(location)}
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;