import React from 'react';

const Info = () => {
  return (
    <div className='bg-gray-100 py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col justify-center items-center mb-6'>
          <h3 className='font-bold text-3xl text-center mb-4'>About Me</h3>
          <p className='text-center text-lg'>
            I am passionate about web development and have a strong background in creating efficient and effective web solutions. With expertise in HTML, CSS, JavaScript, and modern frameworks, I enjoy bringing ideas to life in the browser.
          </p>
        </div>
        <div className='w-full flex justify-center items-center mt-6'>
          <div className='w-full max-w-3xl bg-slate-300 h-0.5'></div>
        </div>
      </div>
    </div>
  );
};

export default Info;
