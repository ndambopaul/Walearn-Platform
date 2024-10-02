import React from "react";


const SingleCourse = ({ course }) => {
  const { icon, title, paragraph } = course;
  return (
    <div className="flex flex-col bg-white items-center text-center p-3 shadow-sm rounded-md">
      <div className="wow fadeInUp" data-wow-delay=".15s">
       <div className="flex mb-10 items-center justify-center">
       <div className=" flex h-[90px] w-[90px] items-center justify-self-center justify-center rounded-md   text-primary">
          {icon}
        </div>
       </div>
      
        <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};


export default SingleCourse;
