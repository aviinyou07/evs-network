import React from 'react';

const TraditionalArtCard = ({ title, description, image }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-2xl mb-5">
      <img src={image} alt={title} className="rounded-lg mb-2 h-96  w-full object-contain" />
      <h3 className="text-xl font-semibold text-yellow-300">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default TraditionalArtCard;
