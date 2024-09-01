import React from 'react';

import "./Home.css"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe"

import WhatStudentsSay from '../components/WhatStudentsSay';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      
      <Team />
      <WhatStudentsSay />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home