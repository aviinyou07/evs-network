import React from 'react';
import TraditionalArtCard from './TraditionalArtCard';
import madhubani from '../assets/Madhubani_Mahavidyas.jpg'
import warli from '../assets/warli.jpeg'
import kalamkari from '../assets/Kalamkari.jpeg'
import tanjore from '../assets/tanjore.jpeg'
import sanjhi from '../assets/sanji.jpeg'
import pottery from '../assets/Pottery.jpeg'

const traditionalArts = [
  { title: 'Madhubani Painting', description: 'Traditional Indian art form from Bihar.', image: madhubani },
  { title: 'Warli Art', description: 'Ancient tribal art from Maharashtra.', image: warli },
  { title: 'Kalamkari', description: 'Hand-painted or block-printed cotton textile.', image: kalamkari },
  { title: 'Pottery', description: 'Traditional earthenware crafted by artisans.', image: pottery },
  { title: 'Tanjore Painting', description: 'Richly decorated South Indian paintings.', image: tanjore },
  { title: 'Sanjhi Art', description: 'Intricate paper cut artworks.', image: sanjhi },
];

const TraditionalArts = () => {
  return (
    <div className="section p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Traditional Arts</h1>
      <div className="flex justify-center">
        <div className="w-full">
          <div className="bg-gray-800 p-4 rounded-lg shadow-2xl">
            {traditionalArts.map(art => (
              <TraditionalArtCard key={art.title} {...art} />
            ))}
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default TraditionalArts;
