import React from "react";
import { motion } from "framer-motion";
import featuresData from "./featuresData";

const WhyChooseUs = () => {
  return (
    <motion.div
      id="features"
      className="bg-[#fff8f0] py-8 md:py-10 lg:py-18 px-2 lg:px-20 mx-auto w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0091bd] mb-6">
          Why Walearn?
        </h2>
        <p className="text-xl md:text-2xl font-medium mb-10">
          Why settle for ordinary when you can join the extraordinary?
        </p>

       
        <div className="flex items-center  flex-col gap-4 md:gap-5">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0
                  ? "md:flex-row gap-5 text-start"
                  : "md:flex-row-reverse gap-5 text-start"
              } w-full`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="h-auto max-h-64 w-auto rounded-full object-cover"
              />
              <div className="flex flex-col  justify-start">
                <div className="text-lg md:text-2xl  flex  font-semibold text-black">
                  <h3 className="text-primary">{feature.title} :</h3> 
                  <h3>{feature.subtitle} </h3>
                </div>
                <p className="text-lg font-light mt-2">{feature.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
