import React from 'react';

const Info = () => {
  return (
    <div className='bg-gray-100 py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col justify-center items-center mb-6'>
          <h3 className='font-bold text-3xl text-center mb-4'>Education</h3>
          <div className='lg:w-3/4 w-full text-center'>
            <p className='mb-4 lg:mb-2 text-lg'>
              <strong>Bachelor of Computer Applications</strong> (2021-24) - CGPA: 9.17
            </p>
            <p className='mb-4 lg:mb-2 text-lg'>
              <strong>XII</strong> - PSEB (2020-2021) - Percentage: 97.8
            </p>
          </div>
        </div>
        <div className='w-full flex justify-center items-center mt-6'>
          <div className='w-full max-w-3xl bg-slate-300 h-0.5'></div>
        </div>
      </div>
    </div>
  );
};

export default Info;
