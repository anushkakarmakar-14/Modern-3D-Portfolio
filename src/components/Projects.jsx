import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_preview_link,
}) => {
  const handleImageClick = () => {
    if (live_preview_link) {
      window.open(live_preview_link, "_blank");
    }
  };

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
      exit="hidden"
      layout
    >
      <Tilt
        tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  scale={1.05}
  transitionSpeed={450}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full'
      >
        <div className='relative w-full h-[230px] group'>
          {/* Clickable Image with Overlay - Only if live_preview_link exists */}
          {live_preview_link ? (
            <div 
              onClick={handleImageClick}
              className="w-full h-full cursor-pointer relative overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110'
              />
              
              {/* Hover Overlay for Live Preview */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <svg 
                    className="w-12 h-12 mx-auto mb-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                  <p className="font-semibold text-lg">View Live Demo</p>
                  <p className="text-sm opacity-90 mt-1">Click to open live site</p>
                </div>
              </div>
            </div>
          ) : (
            // Non-clickable image if no live preview
            <div className="w-full h-full relative overflow-hidden rounded-2xl">
              <img
                src={image}
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />
            </div>
          )}

          {/* Icons in top-right corner */}
          <div className='absolute top-3 right-3 flex gap-2'>
            {/* GitHub Link */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200'
              title="View Source Code"
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>

            {/* Live Preview Link - Only show if live_preview_link exists */}
            {live_preview_link && (
              <div
                onClick={() => window.open(live_preview_link, "_blank")}
                className='green-pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200'
                title="Live Preview"
              >
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("web");
  const [showAll, setShowAll] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize after component mounts to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Define project categories
  const categories = [
    {
      id: "web",
      title: "Web Development",
      description: "Full-stack web applications and responsive websites"
    },
    {
      id: "data",
      title: "Data Analytics",
      description: "Data visualization, analysis and business intelligence"
    },
    {
      id: "aiml",
      title: "AI & ML",
      description: "Artificial Intelligence and Machine Learning projects"
    }
  ];

  // Filter projects by active category
  const categoryProjects = projects.filter(project => {
    const projectCategory = project.category || "web";
    return projectCategory === activeCategory;
  });
  
  // Show only 3 projects unless showAll is true
  const filteredProjects = showAll ? categoryProjects : categoryProjects.slice(0, 3);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setShowAll(false);
  };

  const handleShowMore = () => {
    setShowAll(prev => !prev);
  };

  // Check if button should be visible
  const shouldShowButton = categoryProjects.length > 3;

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Category Filter Tabs */}
      <motion.div 
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-12 flex flex-wrap gap-4 justify-center"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                : "bg-tertiary text-secondary hover:bg-cyan-500/10 hover:text-cyan-400 border border-cyan-400/20"
            }`}
          >
            {category.title}
            <span className="ml-2 text-xs opacity-70">
              ({projects.filter(p => (p.category || "web") === category.id).length})
            </span>
          </button>
        ))}
      </motion.div>

      {/* Category Info */}
      <motion.div
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-6 text-center"
      >
        <p className="text-cyan-400 text-sm">
          Showing {filteredProjects.length} of {categoryProjects.length} projects in {categories.find(cat => cat.id === activeCategory)?.title}
          {shouldShowButton && (
            <span className="text-secondary"> • {showAll ? "Showing all projects" : "Click 'See More' to view all"}</span>
          )}
        </p>
      </motion.div>

      {/* Projects Grid with AnimatePresence */}
      <div className='mt-8 flex flex-wrap gap-7 justify-center'>
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard 
                key={`project-${activeCategory}-${index}-${project.name}`} 
                index={index} 
                {...project} 
              />
            ))
          ) : (
            <motion.div
              key="no-projects"
              variants={fadeIn("", "", 0.3, 1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center py-12 w-full"
            >
              <div className="bg-tertiary/50 rounded-2xl p-8 max-w-md mx-auto">
                <svg 
                  className="w-16 h-16 text-secondary mx-auto mb-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                  />
                </svg>
                <p className="text-secondary text-lg font-medium">
                  No projects yet in this category.
                </p>
                <p className="text-secondary text-sm mt-2">
                  Check back soon for new projects!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* See More/Less Button - Show when category has more than 3 projects */}
      {shouldShowButton && (
        <motion.div
          key={`button-${activeCategory}`} // Add key to force re-render
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-8 text-center"
        >
          <button
            onClick={handleShowMore}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-cyan-300"
          >
            {showAll ? (
              <>
                <span>Show Less</span>
                <span className="ml-2 text-sm opacity-90">(Show only 3)</span>
              </>
            ) : (
              <>
                <span>See More</span>
                <span className="ml-2 text-sm opacity-90">+{categoryProjects.length - 3} more</span>
              </>
            )}
          </button>
        </motion.div>
      )}

      {/* Debug info - remove in production */}
      {/* <div className="mt-4 text-center text-xs text-gray-500">
        Debug: Active: {activeCategory}, Total: {categoryProjects.length}, Showing: {filteredProjects.length}, ShowAll: {showAll.toString()}, Button: {shouldShowButton ? "SHOWING" : "HIDDEN"}
      </div> */}
    </>

  );
};

export default SectionWrapper(Projects, "");