import React from 'react';
import MovieCard from './MovieCard';
import pathan from '../assets/pathan.jpeg'
import brahmastra from '../assets/Brahmastra_Part_One_Shiva.jpg'
import avatar2 from '../assets/Avatar_The_Way_of_Water_poster.jpg'
import dune from '../assets/Dune_(2021_film).jpg'
import spiderman from '../assets/images.jpeg'
import blackpanther from '../assets/blackpanther.jpeg'



const movies = [
  { title: 'Pathaan', description: 'Shah Rukh Khan’s latest blockbuster.', image: pathan },
  { title: 'Brahmastra', description: 'A visual spectacle that captivates.', image: brahmastra },
  { title: 'Avatar 2', description: 'The stunning sequel to the original.', image: avatar2 },
  { title: 'Dune', description: 'A sci-fi epic that is visually breathtaking.', image: dune },
  { title: 'Spider-Man: No Way Home', description: 'The crossover of the decade!', image: spiderman },
  { title: 'Black Panther: Wakanda Forever', description: 'A tribute to the legacy.', image: blackpanther },
];

const HotEntertainment = () => {
  return (
    <div className="section p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Hot Entertainment</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          <div className="bg-gray-800 p-4 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-semibold text-neon-green">Bollywood</h2>
            {movies.slice(0, 3).map(movie => (
              <MovieCard key={movie.title} {...movie} />
            ))}
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-semibold text-neon-green">Hollywood</h2>
            {movies.slice(3).map(movie => (
              <MovieCard key={movie.title} {...movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotEntertainment;
