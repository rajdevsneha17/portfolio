import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Info from '../Components/Info'
import Work from '../Components/Work'
import Education from '../Components/Education'
import Skills from '../Components/Skills'
import SoftSkills from '../Components/SoftSkills'
import Contact from '../Components/Contact'
import Certifications from '../Components/Certifications'
const Home = () => {
  return (
    <div>
     <div>
     <Navbar></Navbar>
     </div>
      <div>
      <HeroSection></HeroSection>
      </div>
      <div>
      <Info></Info>
      </div>
      <div><Work></Work></div>
      <div><Education></Education></div>
      <div><Skills></Skills></div>
      <div><SoftSkills></SoftSkills></div>
      <div><Certifications></Certifications></div>
      <div><Contact></Contact></div>
    </div>
  )
}

export default Home
