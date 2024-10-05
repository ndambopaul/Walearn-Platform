import React from "react";

import { motion } from "framer-motion";
import ShortCoursesData from "./mockData";
import { GoArrowRight } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const ShortCourses = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
        id="courses"
        className="bg-white  py-8 md:py-10 lg:py-10 px-8 lg:px-20"
      >
        <div className="container   ">
          <div className="mx-auto text-center w-full md:max-w-[570px]">
            <h2 className="text-xl md:text-2xl font-bold  text-[#0091bd] mb-6">
              WaLearn short course programs
            </h2>
            <p className="text-lg md:text-xl font-medium mb-10">
              Not quite ready for a complete career shift? Explore our short
              programs designed to boost your skills quickly and effectively
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ShortCoursesData.map((course: any) => (
              <div className=" border md:border md:border-gray-300 bg-white   shadow:none  transition delay-150 duration-300 ease-in-out lg:hover:shadow-lg cursor-pointer  rounded-md">
                <div className="p-3 sm:p-3 space-y-5 md:p-5 md:p-5 lg:p-3 xl:p-3 xl:p-3 2xl:p-3">
                  <h3 className="text-lg font-semibold text-primary  sm:text-2xl lg:text-2xl xl:text-2xl">
                    {course.title}
                  </h3>
                  <p className=" font-normal  text-xs md:text-sm lg:text-sm ">
                    {course.description}
                  </p>
                  <div className=" space-y-2">
                    {course.items.map((item: any) => (
                      <div
                        key={item.id}
                        className="text-sm font-normal flex items-center space-x-3"
                      >
                        <IoMdCheckmarkCircleOutline className="text-[#0091bd]" />
                        <p className="font-light">{item.name}</p>
                      </div>
                    ))}
                  </div>
                  <div className="py-3  w-full flex justify-center items-center space-x-2 bg-white text-primary border border-primary hover:text-white hover:bg-primary">
                    <span>{course.buttonText}</span>
                    <GoArrowRight className="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ShortCourses;
