import React from 'react';
import html from "../assets/html.jpg";
import mern from "../assets/mern.png";
import tailwind from "../assets/tailwind.png";
import webdev from "../assets/webdev.png";


const Skills = () => {
  return (
    <div className='bg-slate-900 py-12'>
      <div className='container mx-auto px-4'>
        <h3 className='text-white text-center font-bold text-5xl mb-10'>TECHNICAL SKILLS</h3>
        <div className='flex flex-wrap justify-center items-center gap-8'>
          <div className='w-full sm:w-1/2 lg:w-1/4 bg-gray-100 p-6 rounded-md flex flex-col justify-center items-center'>
            <img src={html} alt='HTML, CSS, JS' className='w-20 h-20 rounded-full mb-4' />
            <h3 className='font-bold text-center'>HTML, CSS, JS</h3>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/4 bg-gray-100 p-6 rounded-md flex flex-col justify-center items-center'>
            <img src={mern} alt='MERN Stack' className='w-20 h-20 rounded-full mb-4' />
            <h3 className='font-bold text-center'>MERN STACK</h3>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/4 bg-gray-100 p-6 rounded-md flex flex-col justify-center items-center'>
            <img src={webdev} alt='Web Development' className='w-20 h-20 object-cover mb-4' />
            <h3 className='font-bold text-center'>WEB DEVELOPMENT</h3>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/4 bg-gray-100 p-6 rounded-md flex flex-col justify-center items-center'>
            <img src={tailwind} alt='Tailwind CSS' className='w-20 h-20 rounded-full mb-4' />
            <h3 className='font-bold text-center'>TAILWIND CSS</h3>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Skills;
