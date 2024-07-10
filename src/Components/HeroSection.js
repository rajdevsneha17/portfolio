import React from 'react';
import coon from "../assets/coon.webp";
import profilePic from "../assets/Snehaa.jpg"; // Add the profile picture path

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-10'>
     <div className="flex justify-center items-center w-full h-72 overflow-hidden">
      <img src={coon} alt="Hero" className="w-full h-full object-cover" />
    </div>
      <div className='-mt-16'>
        <img src={profilePic} alt='Profile' className='rounded-full border-4 border-white w-32 h-32 object-cover' />
      </div>
     
    </div>
  );
};

export default HeroSection;
