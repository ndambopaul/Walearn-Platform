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
        className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
               
              <h2 className="text-lg fon-bold text-primary">WeLearn</h2>
                <p className="mb-9 text-base font-medium leading-relaxed text-body-color">
                 Trusted Learning Platform
                </p>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center space-x-2">
                    <MdCall className="text-primary" />
                    <h2>0745491093</h2>
                    </div>
                    <div className="flex items-center space-x-2">
                    
                    <MdEmail className="text-primary" />
                    <h2>paulkandambo@gmail.com</h2>
                    </div>
                </div>
                <div className="flex space-x-3 items-center mt-3">
                 <FaTwitter  className="text-primary"/>
                 <FaFacebookF className="text-primary" />
                 <FaLinkedin className="text-primary" />
                 

                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <a
                      href="/courses"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Courses{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Dashboard{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Terms 
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Terms of service{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
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
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Open Support Ticket{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Terms of Use{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
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
