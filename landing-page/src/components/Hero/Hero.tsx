import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <motion.div
        id="home"
        className="relative z-10 bg-white overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      initial={{ opacity: 0, y:50 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.1 }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="flex flex-col gap-5">
                  <h1 className="mb-5 text-xl font-semibold leading-tight text-black sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
                    Learn Software <p className="text-primary font-semibold">Development and Data Skills</p> from Experts.
                    Join our courses and build your skills in Python,
                    JavaScript, Data Science, AI, and more.
                  </h1>
                 <div>
                 <Link
                    to="/"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Get Started
                  </Link>
                 </div>
                </div>
                <div className="flex justify-center items-center bg-white  w-full h-auto">
                  <img
                    src="/images/hero/hero-4.jpeg"
                    alt="Hero Image"
                    className="w-70 h-70 object-cover object-center"
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
