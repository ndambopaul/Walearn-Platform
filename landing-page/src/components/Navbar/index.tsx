import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import menuData from "./menuData"
import React from "react";

const Header = () => {
 
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index:number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
    className={` top-0 left-0 z-40 h-[70px] flex justify-center w-full items-center bg-white ${
      sticky
        ? "!fixed !z-[9999] w-full bg-white shadow-sticky backdrop-blur-sm !transition "
        : "absolute"
    }`}
  >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link to="/" className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"}`}>
              <h2 className="font-bold text-primary text-xl lg:text-3xl md:text-3xl">WeLearn</h2>
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-8px] -rotate-45" : ""
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300  lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen ? "visibility top-full opacity-100" : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={menuItem.id} className="group relative">
                      {menuItem.to ? (
                        <Link
                          to={menuItem.to}
                          className="flex py-2   text-black group-hover:opacity-70  lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <a
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2 text-black group-hover:opacity-70  lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                          >
                            {menuItem.title}
                            
                          </a>
                   
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end space-x-4">
              <Link
                to="/#"
                className="hidden  text-base font-bold text-dark uppercase text-sm text-primary   md:block"
              >
              Become a Student
              </Link>
           
              <Link
                to="/#"
                className="hidden  text-base font-bold text-primary text-dark text-sm   uppercase  md:block"
              >
              Become an Instructor
              </Link>
           
              {/* <Link
                to="/#"
                className="hidden text-base font-bold text-dark text-sm text-primary    md:block"
              >
              LOGIN
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
