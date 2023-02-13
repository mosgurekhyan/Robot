import './Part.css'
import { useRef } from 'react'

function Part() {
  const formRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    formRef.current.reset()
  }
  
  return (
    <div className='part'>
        <div className='part1'>
          <h1 className='title1'>Newsletter</h1>
          <h1 className='h1'>Subscribe To Our <span className='span1'>Newsletter</span></h1>
          <form onSubmit={handleSubmit} ref={formRef} className='inputDiv'>
            <input className='partInput' type="text" placeholder='Enter Your Email Address'/>
            <button className='partBtn'>Subscribe</button>
          </form>
        </div>
        <div className='part2'></div>
    </div>
  )
}

export default Part