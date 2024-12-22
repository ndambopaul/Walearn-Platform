
import Header from "../components/Navbar/index";
import Team from "../components/Team/index";
import  Contact from "../components/contact/index";
import Footer from "../components/Footer/footer"
import Hero from "../components/Hero/Hero";
import WhyChooseUs from "../components/WhyChooseUs/index";
import Instructors from "../components/Instructors/index";
import PopularCourses from "../components/Courses/index";
import InstructorTestimonials from "../components/WhatInstructorsSay/index";
import StudentTestimonial from "../components/WhatStudentsSay/index";
import ShortCourses from "../components/Courses/shortcourses/shortCourses";
const Home = () => {
  return (
    <div className=''>
   

      <Hero />
      <PopularCourses />
      <WhyChooseUs />
      <ShortCourses />
      <Instructors />
      <InstructorTestimonials />
      <StudentTestimonial />
      <Team />
      
  
    </div>
  )
}

export default Home