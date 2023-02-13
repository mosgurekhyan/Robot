import { memo } from "react"

function Talent(props) {
  return (
    <div className='description' key={props.id}>
        <img src={props.img}></img>
        <div className='item5'>
            <h4 className='h4'>{props.name}</h4>
            <p className='p2'>{props.text}</p>
            <h5 className='h5'>Learn More  <i className="fa-solid fa-arrow-right"></i></h5>
        </div>
    </div>
  )
}

export default memo(Talent)