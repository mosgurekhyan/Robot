import React, { useEffect, useRef, useState } from 'react'

function ContactInputs() {
  const formRef = useRef(null)
  const [input, setInput] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    formRef.current.reset()
  }

  const handleScroll = (e) => {
    if (e.target.documentElement.scrollTop > 530){
      setInput(true)
    }
    if (e.target.documentElement.scrollTop >= 1450){
      setInput(false)
    }
    if (e.target.documentElement.scrollTop > 2790){
      setInput(true)
    }
    if (e.target.documentElement.scrollTop >= 4000 && e.target.documentElement.scrollTop <= 6550){
      setInput(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className='section8'>
       <div className='sec81'></div>
       <div className='sec82' style={{marginLeft: input ? '0' : '1265px'}}>
          <h1 className='title1'>Contact</h1>
          <h1 className='h1'>Be Well, Stay Calm And <span className='span1'>Keep In Touch</span></h1>
          <form  ref={formRef} onSubmit={handleSubmit} className='sec8Data'>
            <input className='formInp' type="text" placeholder='First Name'/>
            <input className='formInp' type="text" placeholder='Last Name'/>
            <input className='formInp' type="text" placeholder='Email Address'/>
            <input className='formInp' type="text" placeholder='Phone Number'/>
            <input className='formInp2' type="text" placeholder='Message'/>
            <button className='form2Btn'>Submit</button>
          </form>
       </div>
    </section>
  )
}

export default ContactInputs