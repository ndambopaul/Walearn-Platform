import React from "react";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "40px",
}:{title:string; paragraph:string; width?:string; center?:boolean; mb?:string}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-xl font-semibold !leading-tight text-black  sm:text-4xl lg:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="font-normal !leading-relaxed  text-lg lg:text-xl md:text-xl">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
