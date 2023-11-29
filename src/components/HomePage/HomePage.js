// src/components/Home.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Services />
      <Footer />
    </div>
  );
};

export default HomePage;
