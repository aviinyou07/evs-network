import React from 'react';
import FeatureCard from './FeatureCard';
import latestmoviesimg from '../assets/latestmovies.webp'
import trends from '../assets/latestnews.webp'
import topmusic from '../assets/topmusic.jpeg'
import arts from '../assets/toparts.webp'


const features = [
  {
    title: 'Latest Updates',
    description: 'Stay updated with the latest news in Hollywood and Bollywood.',
    image: trends,
  },
  {
    title: 'Trending Movies',
    description: 'Explore the hottest movies that are trending right now!',
    image: latestmoviesimg,
  },
  {
    title: 'Top Music',
    description: 'Listen to the top tracks in Bollywood and Hollywood.',
    image: topmusic ,
  },
  {
    title: 'Art Highlights',
    description: 'Discover traditional and contemporary art from around the world.',
    image: arts,
  },
];

const Home = () => {
  return (
    <div className="section p-8 bg-gray-900 text-gray-200 text-center">
      <h1 className="text-4xl font-bold mb-6 text-center text-neon-green">Welcome to EVS Network</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-6">
        <h2 className="text-3xl font-bold text-neon-green">Why Choose Us?</h2>
        <p className="mt-4">
          At EVS Network, we bring you closer to the entertainment world. 
          From breaking news to in-depth reviews, we cover it all! Join our community of enthusiasts today.
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-neon-green">Join Our Newsletter</h2>
        <p className="mt-4">
          Sign up to receive exclusive updates and offers directly to your inbox.
        </p>
        <input type="email" placeholder="Enter your email" className="mt-4 p-2 rounded-lg text-gray-800" />
        <button className="mt-4 bg-neon-green text-black p-2 rounded-lg hover:bg-green-500 transition duration-300">Subscribe</button>
      </div>
    </div>
  );
};

export default Home;
