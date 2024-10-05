import React from "react";
import SectionTitle from "../Common/SectionTitle";

import { motion } from "framer-motion";
import CoursesData from "./coursesData";
import SingleCourse from "./singleCourse";

const PopularCourses = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
        id="courses"
        className="bg-white  py-8 md:py-10 lg:py-10 px-8 lg:px-20"
      >
        
          <div className="container mx-auto text-center ">
            <div className="mx-auto text-center w-full md:max-w-[570px]">

        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        Explore Our popular Full Core  programs
        </h2>
        <p className="text-lg md:text-lg font-light mb-10">
        Master coding skills with our programs modelled towards top tech certifications such as Amazon web services and more
        </p>
            </div>


          <div className="grid grid-cols-1 gap-5 justify-self-center md:grid-cols-2 lg:grid-cols-3">
            {CoursesData.map((course:any) => (
              <SingleCourse key={course.id} course={course} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PopularCourses;
