import { memo } from 'react'
import './Cyberika.css'

function Cyberika(props) {
  return (
    <div className='description' key={props.id}>
        <img src={props.img1}></img>
        <div className='item5'>
            <img src={props.img2}></img>
            <h4 className='h4'>{props.type}</h4>
            <p className='p2'>{props.about}</p>
            <h5 className='h5'>{props.more}     <i className="fa-solid fa-arrow-right"></i></h5>
        </div>
    </div>
  )
}

export default memo(Cyberika)