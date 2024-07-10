import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <div className='bg-gray-100 '>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col justify-center items-center mb-6'>
          <h3 className='font-bold text-3xl text-center mb-4'>My Projects</h3>
          <div className='flex flex-col lg:w-3/4 w-full mt-5 gap-5'>
            {/* <div className='flex flex-col lg:flex-row gap-5'>
              <div className='w-full lg:w-1/2 h-24 border-2 border-gray-300 rounded-lg flex justify-center items-center bg-white shadow-md'>
                <p className='text-center'>Blog App (MERN Stack)</p>
              </div>
              <div className='w-full lg:w-1/2 h-24 border-2 border-gray-300 rounded-lg flex justify-center items-center bg-white shadow-md'>
                <p className='text-center'>Weather App(HTML,CSS,JS)</p>
              </div>
            </div> */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='w-full lg:w-1/2 h-24 border-2 border-gray-300 rounded-lg flex justify-center items-center bg-white shadow-md'>
                <Link to="https://clickgrab-f.vercel.app/"><p className='text-center'>Click&Grab(MERN Stack)</p></Link>
              </div>
              <div className='w-full lg:w-1/2 h-24 border-2 border-gray-300 rounded-lg flex justify-center items-center bg-white shadow-md'>
                <Link to="https://shoppingcart-frrrtt.vercel.app/">
                <p className='text-center'>ECommerce(MERN Stack & Redux)</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center mt-6'>
          <div className='w-full max-w-3xl bg-slate-300 h-0.5'></div>
        </div>
      </div>
    </div>
  );
};

export default Work;
