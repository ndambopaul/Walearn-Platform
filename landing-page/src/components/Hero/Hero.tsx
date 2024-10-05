import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <motion.div
        id="home"
        className="relative z-10 bg-white overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="container px-6">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                <div className="flex flex-col gap-5">
                  <h1 className="mb-3 text-xl font-semibold leading-tight text-black sm:text-4xl lg:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                    <span className="text-primary">
                      Code Your Future: Top choice Gateway to Affordable Tech
                      Education
                    </span>
                  </h1>
                  <p className="mb-5 text-lg text-gray-700">
                    Unlock your potential in Software Development, Data Science,
                    and Machine Learning. Master
                    <span className="font-bold text-accent"> Python</span>,{" "}
                    <span className="font-bold text-accent"> JavaScript</span>,
                    and <span className="font-bold text-accent"> AI</span> with
                    our expert-led courses. Choose from flexible payment
                    options, including installment plans and income-share
                    agreements, to support your tech journey!
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
                    <Link
                      to="/"
                      className="rounded-md bg-primary py-2 px-4 text-center font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                      Apply Now
                    </Link>
                    <Link
                      to="/"
                      className="rounded-md bg-white text-center py-2 px-4  font-semibold text-primary border border-primary duration-300 ease-in-out hover:bg-primary/80 hover:text-white"
                    >
                      Explore Programs
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center items-center bg-white rounded-lg w-full">
                  <img
                    src="/courses/student.jpg"
                    alt="Hero Image"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
