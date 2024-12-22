import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
interface Props{
  course:any
}
const SingleCourse = ({ course }:Props) => {
  const { image, title, paragraph } = course;
  return (
    <div className="flex flex-col border lg:border:none md:border-none bg-white items-center   shadow:none lg:shadow-md transition delay-150 duration-300 ease-in-out lg:hover:shadow-lg cursor-pointer md:shadow-md rounded-md">
      <div className="wow fadeInUp" data-wow-delay=".15s">
       <Link to="/" className="relative block h-[200px] w-full">
    
    <img src={image} alt="instructor" className="object-cover w-full h-full" />
    </Link>
      
       <div className="p-3 sm:p-4 space-y-4 md:p-5 md:p-5 lg:p-4 xl:p-5 xl:p-5 2xl:p-5">
        <h3 className="text-lg font-semibold text-primary  sm:text-2xl lg:text-2xl xl:text-2xl">
          {title}
        </h3>
        <p className=" font-normal text-lg md:text-xl lg:text-xl ">
          {paragraph}
        </p>
        <div className="py-3  w-full flex justify-center items-center space-x-2 bg-white text-primary border border-primary hover:text-white hover:bg-primary">
  <span>Learn More</span>
  <GoArrowRight className="" />
</div>

        </div>
      </div>
    </div>
  );
};


export default SingleCourse;
