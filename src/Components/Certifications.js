import React from 'react';
import certImage1 from '../assets/MERN Certificate.png'; // Replace with your actual image paths
import certImage2 from '../assets/Certificate2.png'; // Replace with your actual image paths

const Certifications = () => {
  return (
    <div>
        <div className='flex justify-center items-center bg-slate-800 h-14'>
            <h1 className='font-bold text-white text-2xl'>Certificates of Completion & Excellence</h1>
        </div>
        <div className="flex flex-wrap justify-center">
      {/* Certificate Card 1 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
        <img src={certImage1} alt="Certificate 1" className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800">MERN STACK</div>
          <p className="text-gray-700 text-base">
            Duration: 4.5 months
          </p>
        </div>
      </div>

      {/* Certificate Card 2 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
        <img src={certImage2} alt="Certificate 2" className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800">Responsive Web Design</div>
          <p className="text-gray-700 text-base">
            Duration: 12 Days
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Certifications;
