import React from "react";
import { Link } from "react-router-dom";


const SingleInstructor = ({ instructor }) => {
  const { image , name, description } = instructor;
  return (
    <div className="wow flex flex-col h-full   fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark" data-wow-delay=".1s">
 
    <Link to="/" className="relative block h-[220px] w-full">
    
    <img src={image} alt="instructor" className="object-cover w-full h-full" />
    </Link>
    <div className="p-2 sm:p-4 text-center md:py-4 md:px-4 lg:p-4 xl:py-4 xl:px-4 2xl:p-4">
      <h3>
        <Link
          to="/"
          className="mb-2 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
        >
          {name}
        </Link>
      </h3>
      <p className="   text-base font-medium text-body-color ">
        {description}
      </p>
   
    </div>
  </div>
  );
};


export default SingleInstructor;
