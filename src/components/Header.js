import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFilm, FaMusic, FaPaintBrush, FaInfoCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-neon-green">EVS Network</h1>
        <nav className="flex space-x-8">
          <Link to="/" className="text-neon-green flex items-center hover:text-neon-green transition duration-300 ease-in-out">
            <FaHome className="mr-2 text-xl" /> Home
          </Link>
          <Link to="/hot-entertainment" className="text-neon-green flex items-center hover:text-neon-green transition duration-300 ease-in-out">
            <FaFilm className="mr-2 text-xl" /> Hot Entertainment
          </Link>
          <Link to="/music" className="text-neon-green flex items-center hover:text-neon-green transition duration-300 ease-in-out">
            <FaMusic className="mr-2 text-xl" /> Music
          </Link>
          <Link to="/traditional-art" className="text-neon-green flex items-center hover:text-neon-green transition duration-300 ease-in-out">
            <FaPaintBrush className="mr-2 text-xl" /> Traditional Art
          </Link>
          <Link to="/about" className="text-neon-green flex items-center hover:text-neon-green transition duration-300 ease-in-out">
            <FaInfoCircle className="mr-2 text-xl" /> About Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
