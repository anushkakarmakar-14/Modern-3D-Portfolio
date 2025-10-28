import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { socialLinks } from '../constants';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer id="social" className="relative w-full pt-20 pb-10 bg-primary overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main heading */}
          <motion.h2 
            variants={itemVariants}
            className={`${styles.sectionHeadText} text-3xl md:text-4xl mb-4`}
          >
            Let's <span className="text-cyan-400">Connect</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-secondary text-lg mb-12 max-w-2xl mx-auto"
          >
            Feel free to reach out to me on any of these platforms. I'm always open to discussing 
            new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>

          {/* Social Links Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className={`group relative bg-tertiary/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 text-center transition-all duration-300 ${social.color}`}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Platform icon */}
                <div className="relative z-10">
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    className="w-12 h-12 mx-auto mb-3 object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                  <h3 className="text-white font-medium mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {social.name}
                  </h3>
                  <p className="text-secondary text-xs group-hover:text-white/80 transition-colors duration-300">
                    {social.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="mb-8 p-6 bg-tertiary/30 backdrop-blur-sm rounded-2xl border border-cyan-400/20 max-w-md mx-auto"
          >
            <h4 className="text-white text-lg font-semibold mb-3">Get In Touch</h4>
            <p className="text-secondary mb-2">
              📧 Email: <a href="mailto:anushkakarmakar04@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">anushkakarmakar04@gmail.com</a>
            </p>
            {/* <p className="text-secondary">
              📱 Phone: <span className="text-cyan-400">+91 9330406858</span>
            </p> */}
          </motion.div>

          {/* Footer bottom */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 border-t border-cyan-400/20"
          >
            <p className="text-secondary text-sm">
              © {new Date().getFullYear()} Anushka. All rights reserved. | Made with ❤️ and ☕
            </p>
            <p className="text-secondary/80 text-xs mt-2">
              Crafted with React, Three.js, and Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;