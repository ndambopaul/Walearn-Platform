import React from "react";
import SectionTitle from "../Common/SectionTitle";

import InstructorsData from "./instructorsData";
import SingleInstructor from "./singleInstructor";
import { motion } from "framer-motion";

const Instructors = () => {
  return (
    <>
        <motion.div
        initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
        id="instructors"
        className="bg-slate-100 py-8 md:py-10 lg:py-18 px-8 lg:px-20"
      >
        <div className="container">
          <SectionTitle
            title="Meet and Connect With  Our Instructors"
            paragraph=""
            
          />

          <div className="grid grid-cols-1 gap-10 justify-self-center md:grid-cols-2 lg:grid-cols-3">
            {InstructorsData.map((instructor) => (
              <div key={instructor.id} className="w-full">
              <SingleInstructor  instructor={instructor} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Instructors;
