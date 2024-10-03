import React from "react";
import { Link } from "react-router-dom";

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
       <div className="flex mb-10 items-center justify-center">
       </div>
       <div className="p-3 sm:p-4 md:p-5 md:p-5 lg:p-4 xl:p-5 xl:p-5 2xl:p-5">
        <h3 className="text-lg font-semibold text-black  sm:text-xl lg:text-xl xl:text-xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-normal leading-relaxed text-body-color">
          {paragraph}
        </p>
        </div>
      </div>
    </div>
  );
};


export default SingleCourse;
