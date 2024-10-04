import NewsLatterBox from "./NewsLatterBox";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y:50 }}
    whileInView={{ opacity: 1, y:0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    viewport={{ once: false, amount: 0.1 }}
      id="contact"
      className=" mx-auto flex items-center justify-center overflow-hidden py-8 md:py-10 lg:py-18 bg-white mt-[75px]"
    >
      <div className="container mx-auto flex items-center justify-center">
       
          
           
            <form className="space-y-3 ">
            <h2 className=" text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Contact Us
            </h2>
            <p className=" text-base font-medium text-body-color">
             We would be happy to hear from you.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:grid-cols-2">

              <div className="w-full">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white text-left"
                >
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full rounded-md border border-gray-400 py-3 px-6  placeholder-gray-300 shadow-none outline-none focus:border-primary focus-visible:shadow-none "
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="last-name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white text-left"
                >
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full rounded-md border border-gray-400 py-3 px-6  placeholder-gray-300 shadow-none outline-none focus:border-primary focus-visible:shadow-none "
                />
              </div>
              
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white text-left"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-400 py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white text-left"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Enter your Message"
                  className="w-full resize-none rounded-md border border-gray-400 py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                ></textarea>
              </div>
              <div className="w-full  rounded-md bg-primary py-3 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp text-center ">
                   Send Message
                
              </div>
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="flex space-x-2 items-center">
                    <MdOutlineMailOutline  className="text-primary" size={30} />
                    <h5 className="text-base font-medium text-body-color text-md">Email</h5>
                    </div>
                    <a className="text-base font-medium text-primary" href="mailto:Welearn@gmail.com">Welearn@gmail.com</a>
                </div>
                <div className="space-y-2">
                  <div className="flex space-x-2 items-center">
                    <IoMdCall className="text-primary" size={30} />
                    <h5 className="text-base font-medium text-body-color">Phone</h5>
                    </div>
                    <a className="text-base font-medium text-primary" href="tel:0745491093" >0745491093</a>
                </div>
              </div>
            </form>
          

          
        </div>
    
    </motion.div>
  );
};

export default Contact;
