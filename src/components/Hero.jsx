import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "FullStack Developer",
    "UI/UX Enthusiast",
    "AI/ML Enthusiast",
    "Creative Coder", 
    "Problem Solver"
  ];

  useEffect(() => {
    let timer;
    const currentRoleText = roles[roleIndex];
    
    if (!isDeleting) {
      // Typing logic
      if (currentRole.length < currentRoleText.length) {
        timer = setTimeout(() => {
          setCurrentRole(currentRoleText.substring(0, currentRole.length + 1));
        }, typingSpeed);
      } else {
        // Switch to deleting after a pause
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster when deleting
        }, 2000);
      }
    } else {
      // Deleting logic
      if (currentRole.length > 0) {
        timer = setTimeout(() => {
          setCurrentRole(currentRole.substring(0, currentRole.length - 1));
        }, typingSpeed);
      } else {
        // Switch to next role after deleting
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
        setTypingSpeed(150); // Reset to normal typing speed
      }
    }

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Anushka Karmakar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Turning Imagination into Interactive Experiences <br className='sm:block hidden' />
            <span className="min-h-[60px] inline-block">
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

      <ComputersCanvas />

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
    </section>
  );
};

export default Hero;