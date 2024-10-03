import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import HotEntertainment from './components/HotEntertainment';
import Music from './components/Music';
import TraditionalArt from './components/TraditionalArt';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hot-entertainment" element={<HotEntertainment />} />
            <Route path="/music" element={<Music />} />
            <Route path="/traditional-art" element={<TraditionalArt />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
