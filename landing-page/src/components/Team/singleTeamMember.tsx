import React from "react";
import { Link } from "react-router-dom";

interface Props{
  member:any;
}
const SingleTeamMember = ({ member }:Props) => {
  const { image , name, position, description } = member;
  return (
    <div className="wow flex flex-col h-full  border lg:border:none md:border-none  fadeInUp relative overflow-hidden rounded-lg bg-white shadow:none lg:shadow-md md:shadow-md bg-white transition delay-150 duration-300 ease-in-out lg:hover:shadow-lg" data-wow-delay=".1s">
 
    <Link to="/" className="relative block h-[220px] w-full">
    
    <img src={image} alt="instructor" className="object-cover w-full h-full" />
    </Link>
    <div className="p-2 sm:p-5  md:p-5 text-start justify-start md:p-5 lg:p-5 xl:p-5 xl:p-5 2xl:p-5">
      <h3>
        <Link
          to="/"
          className="mb-2 block text-xl font-semibold text-black sm:text-2xl"
        >
          {name}
        </Link>
      </h3>
      <div className=" text-xs lg:text-[14px] md:text-[14px] p-1 font-bold text-primary">
        {position}
      </div>
      <p className="   text-base font-medium text-gray-500 ">
        {description}
      </p>
   
    </div>
  </div>
  );
};


export default SingleTeamMember;
