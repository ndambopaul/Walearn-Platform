
import { FaRocket } from 'react-icons/fa';
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import React from "react";
const featuresData = [
  {
    id: 1,
    icon: (
      <FaChalkboardTeacher size={45} className="text-primary "   /> 
    ),
    title: "Expert Instructors",
    paragraph:"Learn from industry experts with real-world experience."  },
  {
    id: 2,
    icon: (
      <BsClockFill size={45} className="text-primary "   /> 
    ),
    title: "Flexible Learning",
    paragraph:
     "Study at your own pace with our flexible course schedules."  },
  {
    id: 3,
    icon: (
      <FaLaptopCode size={45} className="text-primary "   /> 
    ),
    title: "Hands-on Projects",
    paragraph:
      "Get practical experience with hands-on projects."  },
  {
    id: 4,
    icon: (
      <FaUsers size={45} className="text-primary "   /> 
    ),
    title: "Community Support",
    paragraph:
     "Join a community of like-minded learners."  },
 
];
export default featuresData;
