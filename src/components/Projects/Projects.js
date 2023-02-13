import React, { useContext } from 'react'
import Machine from '../Machine/Machine'
import { UseContext } from '../UseContext/UseContext'

function Projects() {
  const {machines} = useContext(UseContext)
  return (
    <>
      <section className='section51'>
        <h1 className='title1'>Projects</h1>
        <h1 className='h1'>Our <span className='span1'>Projects</span></h1>
      </section>
      <section className='section5'>
        {
          machines.map(e => <Machine key={e.id} img={e.img} about={e.about} name={e.name} knob={e.knob}/>)
        }
      </section>
    </>
  )
}

export default Projects