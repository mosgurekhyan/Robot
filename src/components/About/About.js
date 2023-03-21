import { useEffect } from 'react'
import AboutUs from '../AboutUs/AboutUs'
import AI from '../AI/AI'
import ContactInputs from '../ContactInputs/ContactInputs'
import Projects from '../Projects/Projects'
import Talents from '../Talents/Talents'
import Team from '../Team/Team'
import { TitleFunction } from '../TitleFunction/TitleFunction'
import WhyUs from '../WhyUs/WhyUs'
import './About.css'

function About() {
  TitleFunction('About - Avation')
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='about'>
      <div className='about1'>About Us</div>
      <AboutUs/>
      <WhyUs/>
      <Team/>
      <AI/>
      <ContactInputs/>
      <Projects/>
      <Talents/>
    </div>
  )
}

export default About