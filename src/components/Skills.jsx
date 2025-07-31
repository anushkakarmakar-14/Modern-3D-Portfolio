import React from 'react'
import { technologies } from '../constants'
import { BallCanvas } from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'

const Skills = () => {
  return (
    <>
      <h2 className='sectionHeadText'>Skills & Technologies</h2>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((tech) => (
          <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Skills, "skills")
