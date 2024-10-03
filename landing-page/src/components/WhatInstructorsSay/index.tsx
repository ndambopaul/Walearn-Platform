
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./singleTestmonial";
import TestimonialData from "./testmonialsData";



const InstructorTestimonials = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
    className="relative z-10 bg-white py-8 md:py-10 lg:py-18">
      <div className="container">
        <SectionTitle
          title="What Our Instructors Say"
          paragraph=""
          // center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {TestimonialData.map((testimonial:any) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
  
    </motion.div>
  );
};

export default InstructorTestimonials;
