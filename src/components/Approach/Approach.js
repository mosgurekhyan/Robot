import { memo } from 'react'
import './Approach.css'

function Approach(props) {
  
  return (
    <div className='approach' key={props.id}>
      <h2 className='approachName'>{props.name}</h2>
      <p className='approachText'>{props.text}</p>
    </div>
  )
}

export default memo(Approach)