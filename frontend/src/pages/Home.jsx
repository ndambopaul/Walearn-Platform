
// import "../tailwind.css";

import Header from "../components/Navbar/index";
import Hero from "../components/Hero/Hero";
import WhyChooseUs from "../components/WhyChooseUs/index";
import PopularCourses from "../components/Courses/index";
import Instructors from "../components/Instructors/index";
import InstructorTestimonials from "../components/WhatInstructorsSay/index";
import  StudentTestimonial from "../components/WhatStudentsSay/index";
import Team from "../components/Team/index";
import  Contact from "../components/contact/index";
import Footer from "../components/Footer/footer"
const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Hero />
      <WhyChooseUs />
      <PopularCourses />
      <Instructors />
      <InstructorTestimonials />
      <StudentTestimonial />
      <Team />
      <Contact />
      <Footer />
      {/* <Navbar />
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
      <Footer /> */}
    </div>
  )
}

export default Home