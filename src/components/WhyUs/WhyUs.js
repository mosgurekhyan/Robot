import React, { useContext } from 'react'
import Approach from '../Approach/Approach'
import { UseContext } from '../UseContext/UseContext'

function WhyUs() {
  const {approaches} = useContext(UseContext)
 
  return (
    <div className='about2'>
        <h1 className='title1'>Why Us</h1>
        <h1 className='h1'>Our <span className='span1'>Approach</span></h1>
        <div className='about22'>
          {
            approaches.map(e => <Approach key={e.id} name={e.name} text={e.text}/>)
          }
        </div>
    </div>
  )
}

export default WhyUs