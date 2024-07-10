import React from 'react';

// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { TiMail } from "react-icons/ti";
import { GrLinkedin } from "react-icons/gr";

const Contact = () => {
  return (
    <div className='bg-slate-900 py-12'>
      <div className='container mx-auto px-4 text-center'>
        <h3 className='text-white font-bold text-3xl mb-6'>Contact</h3>
        <div className='flex flex-col items-center gap-6'>
          <div className='flex items-center text-white text-lg'>
            <TiMail className='text-2xl mr-4 h-10 w-8' />
            <a href='mailto:rajdevsneha10@gmail.com' className='hover:underline'>
              rajdevsneha10@gmail.com
            </a>
          </div>
          <div className='flex items-center text-white text-lg'>
            <GrLinkedin  className='text-2xl mr-4 lg:ml-14' />
            <a href='https://www.linkedin.com/in/sneharajdev' className='hover:underline' target='_blank' rel='noopener noreferrer'>
            www.linkedin.com/in/sneharajdev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
