import { useContext } from 'react'
import Talent from '../Talent/Talent'
import { UseContext } from '../UseContext/UseContext'

function Talents() {
  const {talents} = useContext(UseContext)
  return (
    <section className='section9'>
        <h1 className='title1'>Insights</h1>
        <h1 className='h1'>Tapping <span className='span1'>Intelligence</span>Through Talent.</h1>
        <div className='talants'>
          {
            talents.map(e => <Talent key={e.id} img={e.img} name={e.name} text={e.text}/>)
          }
        </div>
    </section>
  )
}

export default Talents