import React from "react";

interface Props{
  feature:any
}
const SingleFeature = ({ feature }:Props) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="flex flex-col  items-center text-center ">
      <div className="wow fadeInUp" data-wow-delay=".15s">
       <div className="flex mb-4 items-center justify-center">
       <div className=" flex h-[30px] w-[30px] items-center justify-self-center justify-center rounded-md   text-primary">
          {icon}
        </div>
       </div>
      
        <h3 className="text-xl font-semibold text-black  sm:text-xl lg:text-xl xl:text-xl">
          {title}
        </h3>
        <p className=" font-light leading-relaxed">
          {paragraph}
        </p>
      </div>
    </div>
  );
};


export default SingleFeature;
