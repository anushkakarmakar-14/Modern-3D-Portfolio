import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Import your image - update the path if needed
import aboutImage from "../assets/about-image.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt 
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    scale={1.05}
    transitionSpeed={450}
    className='xs:w-[250px] w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1'
        >
          <p>
            I'm a passionate Full-Stack Developer with strong expertise in modern web technologies including React, Node.js, and TypeScript. My solid foundation in Data Structures and Algorithms enables me to build efficient, scalable solutions to complex problems. Recently, I've been expanding into AI/ML, applying reinforcement learning in practical projects like autonomous navigation systems. I'm eager to contribute my technical skills and quick learning ability to create impactful software solutions.
          </p>
        </motion.div>

        {/* Right side - Enhanced 3D Image */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="flex-1 flex justify-center md:justify-end"
        >
          <motion.div 
            className="relative"
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Floating animation */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Outer glow effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 255, 0, 0.3)",
                    "0 0 40px rgba(255, 0, 128, 0.4)",
                    "0 0 20px rgba(0, 255, 0, 0.3)"
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-180 green-pink-gradient rounded-full p-1"
              >
                {/* 3D Tilt effect container */}
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  scale={1.05}
                  transitionSpeed={300}
                  glareEnable={true}
                  glareMaxOpacity={0.3}
                  glareColor="#ffffff"
                  glarePosition="all"
                  className="tilt-element"
                >
                  <motion.div
                    whileHover={{
                      rotateZ: 2,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-tertiary rounded-full p-3 relative overflow-hidden"
                  >
                    {/* Subtle shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
                      animate={{
                        x: ["-100%", "200%", "-100%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: 1
                      }}
                    />
                    
                    <img
                      src={aboutImage}
                      alt="About me"
                      className="w-full h-full object-cover rounded-full relative z-10"
                    />
                    
                    {/* Floating particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-green-400 rounded-full"
                        animate={{
                          y: [0, -20, 0],
                          x: [0, 10, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 1.2,
                          ease: "easeInOut"
                        }}
                        style={{
                          left: `${20 + i * 30}%`,
                          top: "10%",
                        }}
                      />
                    ))}
                  </motion.div>
                </Tilt>
              </motion.div>
              
              {/* Background decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 green-pink-gradient rounded-full opacity-60 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 green-pink-gradient rounded-full opacity-60 blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");