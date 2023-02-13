import { useEffect, useState } from 'react'
import Plan from '../Plan/Plan'
import Questions from '../Questions/Questions'
import './Home.css'
import AboutUs from '../AboutUs/AboutUs'
import Team from '../Team/Team'
import AI from '../AI/AI'
import ContactInputs from '../ContactInputs/ContactInputs'
import Projects from '../Projects/Projects'
import Talents from '../Talents/Talents'
import Service from '../Service/Service'
import Cyberica from '../Cyberica/Cyberica'
import Testimonial from '../Testimonial/Testimonial'
import { TitleFunction } from '../TitleFunction/TitleFunction'

function Home({ plans }) {
  const [num, setNum] = useState(false)
  const [plan, setPlan] = useState(false)

  TitleFunction('Home - Avation')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = (e) => {
    if (e.target.documentElement.scrollTop > 1700){
      setNum(true)
    }
    if (e.target.documentElement.scrollTop > 5540){
      setPlan(true)
    }
  }

  return (
    <div className='home'>
      <header>
        <div className='frame'>
         <h1 className='h1'>Let’s Horizon <span className='span1'>Robotics</span> Handle It,</h1>
         <p className='p3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         <div className='item1'>
            <div className='image2'></div>
            <span className='span2'>Learn More <i className="fa-solid fa-arrow-right"></i></span>
          </div>
        </div>
        <div className='image3'></div>
      </header>
      <Service/>
      <Cyberica/>
      <div className='blackDiv'></div>
      <div className='numbers'>
        <div className='number'><div><h2 style={{display: num ? 'inline' : 'none'}} className='h6'></h2><em>+</em></div><p className='p4'>Client</p></div>
        <div className='number'><div><h2 style={{display: num ? 'inline' : 'none'}} className='h62'></h2><em>+</em></div><p className='p4'>Project</p></div>
        <div className='number'><div><h2 style={{display: num ? 'inline' : 'none'}} className='h63'></h2><em>+</em></div><p className='p4'>Robot</p></div>
        <div className='number'><div><h2 style={{display: num ? 'inline' : 'none'}} className='h6'></h2><em>+</em></div><p className='p4'>Client</p></div>
      </div>
      <AboutUs/>
      <AI/>
      <Team/>
      <Testimonial/>
      <Projects/>
      <section className='section51'>
        <h1 className='title1'>Pricing Plan</h1>
        <h1 className='h1'>Our <span className='span1'>Pricing Plan</span></h1>
      </section>
      <section className='section6'>
        <div className='manage' style={{marginLeft: plan ? '0' : '1280px'}}>
          {
            plans.map(e => <Plan key={e.id} img={e.img} title={e.title} price={e.price} text={e.text} btn={e.btn}/>)
          }
        </div>
      </section>
      <Questions/>
      <ContactInputs/>
      <Talents/>
    </div>
  )
}

export default Home