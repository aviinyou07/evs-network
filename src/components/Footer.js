import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6 mt-8">
      <div className="text-center">
        <p className="text-lg text-neon-green">Follow us on:</p>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-2xl hover:text-neon-green">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" className="text-2xl hover:text-neon-green">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-2xl hover:text-neon-green">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" className="text-2xl hover:text-neon-green">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="mt-4">&copy; 2024 EVS Network. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
