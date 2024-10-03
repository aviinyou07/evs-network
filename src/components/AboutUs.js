import React from 'react';
import t1 from '../assets/t1.webp'
import t2 from '../assets/t2.webp'
import t3 from '../assets/t3.jpeg'

const AboutUs = () => {
  return (
    <div className="section p-8 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-6 text-center text-neon-green">About Us</h1>
      <p className="mb-4 text-lg text-center">
        Welcome to EVS Network, your ultimate destination for the latest updates in glamour and arts, focusing on both Bollywood and Hollywood.
      </p>
      <p className="mb-4 text-lg text-center">
        Our mission is to connect art enthusiasts and entertainment lovers with the finest in the industry. Whether it’s the latest movie, trending music, or exquisite traditional art forms, we aim to provide quality content that enriches your experience.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-center text-neon-green">Our Mission</h2>
      <p className="mb-4 text-lg text-center">
        At EVS Network, we believe in the power of art and entertainment to inspire and unite. Our goal is to deliver insightful content that highlights the richness of cultural expressions across the globe. We strive to be a bridge connecting artists, creators, and audiences.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-center text-neon-green">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img src={t1} alt="Team Member 1" className="rounded-full w-32 h-32 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-center">John Doe</h3>
          <p className="text-center">Editor-in-Chief</p>
          <p className="text-center mt-2">John is passionate about cinema and literature, and he oversees all content to ensure quality and relevance.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img src={t2} alt="Team Member 2" className="rounded-full w-32 h-32 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-center">Jane Smith</h3>
          <p className="text-center">Content Writer</p>
          <p className="text-center mt-2">With a love for storytelling, Jane crafts engaging articles that resonate with our audience.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img src={t3} alt="Team Member 3" className="rounded-full w-32 h-32 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-center">Mike Johnson</h3>
          <p className="text-center">Art Director</p>
          <p className="text-center mt-2">Mike brings creativity and vision, ensuring our visual content is captivating and impactful.</p>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4 text-center text-neon-green mt-8">Join Us!</h2>
      <p className="mb-4 text-lg text-center">
        We invite you to follow us on our journey through the world of glamour and arts. Stay tuned for exciting updates, events, and more!
      </p>
      <div className="text-center">
        <a href="/subscribe" className="inline-block mt-4 bg-neon-green text-black font-bold py-2 px-4 rounded hover:bg-green-500 transition duration-300">Subscribe Now</a>
      </div>
    </div>
  );
};

export default AboutUs;
