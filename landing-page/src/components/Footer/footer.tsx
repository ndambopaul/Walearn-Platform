import React from "react";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-primary  pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16 space-y-6">
               
              <h2 className="text-md lg:text-3xl md:text-3xl font-bold text-white">WeLearn</h2>
              <p className="text-md font-semibold text-white">Well Structured and Organized project based Learning Platform for in demand tech skills</p>
                <div className="flex space-x-3 items-center mt-3">
                 <FaTwitter  className="text-white" size={30}/>
                 <FaFacebookF className="text-white" size={30} />
                 <FaLinkedin className="text-white" size={30} />
                 

                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
               
                <ul>
                  <li>
                    <a
                      href="/courses"
                      className="mb-4 inline-block text-base font-medium text-white"
                    >
                      {" "}
                      Courses{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-white"
                    >
                      {" "}
                      Dashboard{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-white"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="mb-4 inline-block text-base font-medium text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/subscribe"
                      className="mb-4 inline-block text-base font-medium text-white"
                    >
                      Subscribe
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
               
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-white"
                    >
                      {" "}
                      Terms of service{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-white"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-white"
                    >
                      {" "}
                      Refund Policy{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
               
                <ul>
                 
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-white"
                    >
                      {" "}
                      Terms of Use{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-white"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
       
      </footer>
    </>
  );
};

export default Footer;
