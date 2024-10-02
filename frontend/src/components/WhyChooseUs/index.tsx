import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const WhyChooseUs = () => {
  return (
    <>
      <section
        id="features"
        className="bg-light py-8 md:py-10 lg:py-18"
      >
        <div className="container">
          <SectionTitle
            title="Why Choose Us"
            paragraph="Master coding with expert-led courses, 24/7 support, and a community to help you succeed. Whether you're a beginner or advanced, we have the right course for you."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 justify-self-center md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
