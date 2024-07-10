import React from 'react'
import { Link } from 'react-router-dom'
import Resume from "../assets/Resume_alt.pdf"
const Navbar = () => {
  return (
    <div>
      <nav className='w-full h-16 bg-slate-600 shadow-lg '>
      <div className='flex justify-end items-end mr-10  '>

{/* <div><button className='   p-2 ml-10 text-white mt-2 hover:bg-slate-500 sm:text-sm lg:text-lg transition ease-in duration-300'>About</button></div>
<div><button className='   p-2 ml-10 text-white mt-2 hover:bg-slate-500 sm:text-sm lg:text-lg transition ease-in duration-300'>Contact</button></div> */}
<div className='flex justify-center items-center mt-2.5'>
          <a
            href={Resume}
            download
            className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'
          >
            Download Resume
          </a>
        </div>
</div>
    </nav>
    
    </div>
  )
}

export default Navbar
