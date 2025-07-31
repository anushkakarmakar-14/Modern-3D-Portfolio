import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='group relative w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs px-2 py-1 rounded shadow-md z-10">
            {technology.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
