
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./singleTestmonial";
import TestimonialData from "./testmonialsData"


const StudentTestimonial = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] py-8 md:py-10 lg:py-18">
      <div className="container">
        <SectionTitle
          title="What Our Students Say"
          paragraph=""
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {TestimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default StudentTestimonial;
