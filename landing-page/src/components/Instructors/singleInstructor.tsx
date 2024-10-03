import React from "react";
import { Link } from "react-router-dom";

interface Props{
  instructor:any
}
const SingleInstructor = ({ instructor }:Props) => {
  const { image , name, designation,description } = instructor;
  return (
    <div className="wow border lg:border:none md:border-none flex flex-col h-full transition delay-150 duration-300 ease-in-out lg:hover:shadow-lg   fadeInUp relative overflow-hidden rounded-lg bg-white shadow:none lg:shadow-md md:shadow-md" data-wow-delay=".1s">
 
    <Link to="/" className="relative block h-[200px] w-full">
    
    <img src={image} alt="instructor" className="object-cover w-full h-full" />
    </Link>
    <div className="p-3 sm:p-4 md:p-5 text-center md:p-5 lg:p-4 xl:p-5 xl:p-5 2xl:p-5 space-y-3">
      <h3>
        <Link
          to="/"
          className="mb-2 block text-md font-bold text-black  sm:text-xl"
        >
          {name}
        </Link>
      </h3>
      <h4 className="text-md font-semibold text-red-900">{designation}</h4>
      {/* <p className="   text-sm font-normal ">
        {description}
      </p> */}
   <div className=" text-center text-lg font-semibold text-white px-4 py-3 bg-primary rounded-md">
     View Profile
   </div>
    </div>
  </div>
  );
};


export default SingleInstructor;
