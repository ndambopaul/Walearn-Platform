import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleCourse from "./singleCourse";
import CoursesData from "./coursesData";

const PopularCourses = () => {
  return (
    <>
      <section
        id="courses"
        className="bg-primary/[.03] py-8 md:py-10 lg:py-18"
      >
        <div className="container">
          <SectionTitle
            title="Popular courses"
            paragraph="Master coding skills our popular courses"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 justify-self-center md:grid-cols-2 lg:grid-cols-3">
            {CoursesData.map((course) => (
              <SingleCourse key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCourses;
