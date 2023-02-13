import React, { useEffect, useState } from 'react'

function AboutUs() {
  const [img, setImg] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const handleScroll = (e) => {
    if (e.target.documentElement.scrollTop > 350){
      setImg(true)
    }
    if(e.target.documentElement.scrollTop >= 1200 && e.target.documentElement.scrollTop <= 2200){
      setImg(false)
    }
  }
 
  return (
    <section className='section1'>
        <div className='sec1'>
          <h1 className='title1'>About Us</h1>
          <h1 className='h1'>Empowering <span className='span1'>People</span>By Keeping Them Well</h1>
          <p className='p3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.</p>
          <div className='sec3'>
           <div className='sec11'>
             <img style={{transform: img ? 'rotateZ(360deg)' : 'none'}} className='sec1img' src="https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Component-3-1.png" alt="" />
             <div className='sec13'>
               <h4 className='h4'>Smart Solutions</h4>
               <p style={{marginLeft: img ? '0' : '500px'}} className='p3'>Lorem Ipsum is simply dummy text of the printing and typesetting industr.</p>
             </div>
           </div>
           <div className='sec11'>
             <img style={{transform: img ? 'rotateZ(360deg)' : 'none'}} className='sec1img' src="https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Component-2.png" alt="" />
             <div className='sec13'>
               <h4 className='h4'>Certified Expert</h4>
               <p style={{marginLeft: img ? '0' : '500px'}} className='p3'>Lorem Ipsum is simply dummy text of the printing and typesetting industr.</p>
             </div>
           </div>
          </div>
          <a className='input2'>Click Here</a>
        </div>
        <div className='sec2'></div>
    </section>
  )
}

export default AboutUs