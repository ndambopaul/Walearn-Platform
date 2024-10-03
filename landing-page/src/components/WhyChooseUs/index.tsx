import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  return (
    <>
      <motion.div
        id="features"
        className="bg-blue-50 py-8 md:py-10 lg:py-18 px-2 lg:px-20 mx-auto w-full"
        initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="container">
          <SectionTitle
            title="Why Choose Us"
            paragraph="Master coding with expert-led courses, 24/7 support, and a community to help you succeed. Whether you're a beginner or advanced, we have the right course for you."
            center
          />

          <div className="grid grid-cols-1 gap-4 justify-self-center md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WhyChooseUs;
