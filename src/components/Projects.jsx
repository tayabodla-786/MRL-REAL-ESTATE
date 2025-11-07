import React from 'react'
import { projectsData } from '../constants/projects'

const Projects = () => {
  return (
    <div className='mt-80 cursor-pointer'>
      <h2 className='text-[#F59D24] mb-10 text-4xl font-bold text-center'>Our Projects</h2>
      <h2 className='text-center text-lg font-medium mt-5'>Choose your Project from our Comprehensive Range of  Real Estate Projects in Pakistan!</h2>
      <div className='grid grid-cols-1 my-8 mx-auto w-[80%] sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projectsData.map((project) => (
          <div
          key={project.id}
          className='group relative bg-white rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out transform hover:-translate-y-2'
          >
            <div className='overflow-hidden'>
              <img
               src={project.image}
                alt={project.title}
                className='w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out'
                 />
            </div>
            <div className='p-5 text-center'>
              <h3 className='text-lg font-semibold text-[#030147] tracking-wide'>
                {project.title}
              </h3>
            </div>
            <div className="absolute inset-0 bg-[#030147]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
        ))}
      </div>
      
    </div>
  )
}

export default Projects
