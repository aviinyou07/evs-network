import React from 'react';

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="rounded-lg mb-4 h-40 w-full object-cover" />
      <h3 className="text-xl font-semibold mb-2 text-yellow-300">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
