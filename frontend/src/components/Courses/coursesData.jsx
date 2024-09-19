
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";

import React from "react";
const CoursesData = [
  {
    id: 1,
    icon: (
      <FaChalkboardTeacher size={45} className="text-primary "   /> 
    ),
    title: "Full Stack Web Development",
    paragraph:"Become a proficient full stack developer by mastering front-end and back-end technologies."  },
  {
    id: 2,
    icon: (
      <GoGraph size={45} className="text-primary "   /> 
    ),
    title: "Data Science with Python",
    paragraph:
     "Gain expertise in data analysis and machine learning with Python, one of the most popular languages in the field"  },
  {
    id: 3,
    icon: (
      <FaBrain size={45} className="text-primary "   /> 
    ),
    title: "Deep Learning Specialization",
    paragraph:
      "Delve into deep learning with hands-on projects on neural networks, CNNs, RNNs, and more."  },

 
];
export default CoursesData;
