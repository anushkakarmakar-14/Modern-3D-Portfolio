import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import myCV from '../assets/Anushka_CV.pdf';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect which section is currently in view
      const sections = navLinks.map(link => document.getElementById(link.id));
      const currentSection = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActive(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    // Use the imported myCV variable directly
    const link = document.createElement("a");
    link.href = myCV;
    link.download = "Anushka_CV.pdf"; // This will be the filename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Alternative method - if the above doesn't work, try this:
  const handleDownloadCVAlternative = () => {
    window.open(myCV, '_blank');
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary/95 backdrop-blur-sm" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Anushka &nbsp;
            <span className='sm:block hidden'> | 3d Portfolio</span>
          </p>
        </Link>

        <div className='hidden sm:flex items-center gap-10'>
          <ul className='list-none flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300`}
                onClick={() => setActive(nav.id)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Download CV Button */}
          <button
            onClick={handleDownloadCV}
            className="relative px-6 py-3 bg-transparent border border-cyan-400/50 rounded-lg text-white font-medium overflow-hidden group"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/30 transition-all duration-500 rounded-lg scale-75 group-hover:scale-100"></div>
            
            {/* Border animation */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 p-[1px]">
              <div className="absolute inset-0 bg-primary rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
              <svg 
                className="w-4 h-4 group-hover:animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Download CV
            </span>
          </button>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center gap-4'>
          {/* Mobile Download CV Button */}
          <button
            onClick={handleDownloadCV}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-white text-sm font-medium relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors duration-300"></div>
            <span className="relative z-10 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              CV
            </span>
          </button>

          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl backdrop-blur-sm border border-cyan-500/20`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  } hover:text-cyan-400 transition-colors duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;