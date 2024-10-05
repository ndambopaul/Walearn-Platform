
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
    image: "/images/paulndambo.jpg",
    title: "Expert Instructors",
    subtitle: "Learn from the Best",
    paragraph:
      "Our instructors aren't just teachers—they're industry professionals with years of experience. You'll be learning from people who are deeply involved in the fields they teach, providing you with valuable insights, practical knowledge, and the latest industry trends. This hands-on approach helps you build skills that are not only theoretical but are also highly practical and market-ready."
  },
  {
    id: 2,
    icon: (
      <BsClockFill size={45} className="text-primary "   /> 
    ),
    image: "/images/paulndambo.jpg",
    title: "Flexible Learning",
    subtitle: "Tailored Education to Fit Your Schedule",
    paragraph:
     "We keep our classes cozy, with just 7-10 students per class for part-time and 12-15 students per class for full-time. Say goodbye to getting lost in the crowd—our personalised approach ensures you get the attention and support you need to thrive."  },
  {
    id: 3,
    icon: (
      <FaLaptopCode size={45} className="text-primary "   /> 
    ),
    image: "/images/paulndambo.jpg",
    title: "Learn-Now-Pay-Later",
    subtitle: "Lipa mdogo mdogo & income-sharest ",
    paragraph:
      "We get it—investing in your future can be daunting. That’s why we offer flexible financing options. With our lipa mdogo mdogo plan, you can pay fees gradually over a longer time period. With our income-share, you pay 50% of fees and the rest once you are earning."  },
  {
    id: 4,
    icon: (
      <FaUsers size={45} className="text-primary "   /> 
    ),
    image: "/images/paulndambo.jpg",
    title: "Community Support",
    subtitle: "Collaborate, Connect, and Grow Together",
    paragraph:
      "Join a community of like-minded learners who will support you throughout your learning journey. Collaborate on projects, get peer feedback, and build connections that last beyond the classroom."
  },
 
];
export default featuresData;
