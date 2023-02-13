import React, { useContext } from 'react'
import Cyberika from '../Cyberika/Cyberika'
import { UseContext } from '../UseContext/UseContext'

function Cyberica() {
  const {cyberika} = useContext(UseContext)
  return (
    <div className='cyberika'>
        {
          cyberika.map(e => <Cyberika img1={e.img1} img2={e.img2} type={e.type} about={e.about} more={e.more} id={e.id} key={e.id}/>)
        }
    </div>
  )
}

export default Cyberica