import React from "react";
import SectionTitle from "../Common/SectionTitle";

import InstructorsData from "./instructorsData";
import SingleInstructor from "./singleInstructor";

const Instructors = () => {
  return (
    <>
      <section
        id="inrstructors"
        className="bg-light py-8 md:py-10 lg:py-18"
      >
        <div className="container">
          <SectionTitle
            title="Meet Our Instructors"
            paragraph=""
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 justify-self-center md:grid-cols-2 lg:grid-cols-3">
            {InstructorsData.map((instructor) => (
              <div key={instructor.id} className="w-full">
              <SingleInstructor  instructor={instructor} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructors;
