import { useEffect } from 'react'
import AI from '../AI/AI'
import ContactInputs from '../ContactInputs/ContactInputs'
import Cyberica from '../Cyberica/Cyberica'
import Questions from '../Questions/Questions'
import Service from '../Service/Service'
import Testimonial from '../Testimonial/Testimonial'
import { TitleFunction } from '../TitleFunction/TitleFunction'
import WhyUs from '../WhyUs/WhyUs'
import './Services.css'

function Services() {
  TitleFunction('Services - Avation')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='services'>
      <div className='about1'>Services</div>
      <Service/>
      <Cyberica/>
      <WhyUs/>
      <Testimonial/>
      <div className='blackDiv'></div>
      <Questions/>
      <AI/>
      <ContactInputs/>
    </div>
  )
}

export default Services