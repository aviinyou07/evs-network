import React from 'react';

const MovieCard = ({ title, description, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-2xl mb-6 p-5 text-center w-auto">
      <img src={image} alt={title} className="rounded-lg mb-2 h-48 w-full object-contain" />
      <h3 className="text-xl font-semibold text-yellow-300">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default MovieCard;
