import React from 'react';
import MusicCard from './MusicCard';
import chal from '../assets/chal.jpg'
import kesariya from '../assets/kesariya.webp'
import channa from '../assets/channa.jpg'
import blindinglights from '../assets/Blinding_Lights.png'
import shapeofyou from '../assets/shape.webp'
import levitating from '../assets/Levitating_(DaBaby_Remix).png'


const music = [
  { title: 'Chal Ghar chale', artist: 'Mithoon', image:chal },
  { title: 'Kesariya', artist: 'Arijit Singh', image: kesariya },
  { title: 'Channa Mereya', artist: 'Arijit Singh', image: channa },
  { title: 'Blinding Lights', artist: 'The Weeknd', image: blindinglights },
  { title: 'Shape of You', artist: 'Ed Sheeran', image: shapeofyou },
  { title: 'Levitating', artist: 'Dua Lipa', image:levitating },
];

const Music = () => {
  return (
    <div className="section p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Music</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          <div className="bg-gray-800 rounded-lg shadow-2xl p-5">
            <h2 className="text-2xl font-semibold text-center text-neon-green">Bollywood</h2>
            {music.slice(0, 3).map(song => (
              <MusicCard key={song.title} {...song} />
            ))}
          </div>
          <div className="bg-gray-800 rounded-lg shadow-2xl p-5">
            <h2 className="text-2xl font-semibold text-center text-neon-green">Hollywood</h2>
            {music.slice(3).map(song => (
              <MusicCard key={song.title} {...song} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
