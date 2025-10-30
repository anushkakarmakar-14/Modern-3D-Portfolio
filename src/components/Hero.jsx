import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isMobile, setIsMobile] = useState(false);

  const roles = [
    "Full-Stack Developer",
    "Data Enthusiast", 
    "Visualization Specialist",
    "AI/ML Explorer",
    "Creative Problem Solver"
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    let timer;
    const currentRoleText = roles[roleIndex];
    
    if (!isDeleting) {
      if (currentRole.length < currentRoleText.length) {
        timer = setTimeout(() => {
          setCurrentRole(currentRoleText.substring(0, currentRole.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
      }
    } else {
      if (currentRole.length > 0) {
        timer = setTimeout(() => {
          setCurrentRole(currentRole.substring(0, currentRole.length - 1));
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
        setTypingSpeed(150);
      }
    }

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex]);

  return (
    <section className={`relative w-full ${isMobile ? 'py-20' : 'h-screen'} mx-auto`}>
      {/* Main Content - No absolute positioning on mobile */}
      <div className={`max-w-7xl mx-auto ${styles.paddingX} ${isMobile ? 'flex flex-col items-center text-center' : 'flex flex-row items-start gap-5'}`}>
        {!isMobile && (
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
        )}

        <div className={isMobile ? 'w-full' : ''}>
          <h1 className={`${isMobile ? 'text-4xl mb-4' : styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Anushka</span>
          </h1>
          <p className={`${isMobile ? 'text-lg' : `${styles.heroSubText}`} text-white-100`}>
            Turning Imagination into Interactive Experiences
            {!isMobile && <br className='sm:block hidden' />}
            <span className={`${isMobile ? 'block mt-4 text-xl' : 'min-h-[60px] block mt-2'}`}>
              {currentRole}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
          </p>
        </div>
      </div>

      {/* Only show computer on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 -z-10">
          <ComputersCanvas />
        </div>
      )}

      {/* Scroll indicator - only show if there's space */}
      {!isMobile && (
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;