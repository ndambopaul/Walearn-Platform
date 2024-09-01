import React from 'react';

import "./Home.css"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe"

import WhatStudentsSay from '../components/WhatStudentsSay';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import HeroSection from '../components/HeroSection';
import CourseCategories from '../components/CourseCategories';
import PopularCourses from '../components/PopularCourses';
import Instructors from '../components/Instructors';
import InstructorsTestimonials from '../components/InstructorsTestimonials';
import ContactUs from '../components/ContactUs';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <CourseCategories />
      <PopularCourses />
      <Instructors />
      <InstructorsTestimonials />
      <WhatStudentsSay />
      <Team />
      <ContactUs />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home