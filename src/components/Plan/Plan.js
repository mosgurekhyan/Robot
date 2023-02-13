import { memo } from 'react'
import './Plan.css'

function Plan(props) {
  return (
    <div className='plan' key={props.id}>
        <img className='planImg' src={props.img} alt="" />
        <div className='planData'>
            <h2 className='planTitle'>{props.title}</h2>
            <h1 className='planPrice'><i className='dolar'>$</i>{props.price}</h1>
            <p className='planText'><i aria-hidden="true" className="far fa-check-circle"></i> {props.text}</p>
            <p className='planText'><i aria-hidden="true" className="far fa-check-circle"></i> {props.text}</p>
            <p className='planText'><i aria-hidden="true" className="far fa-check-circle"></i> {props.text}</p>
            <p className='planText'><i aria-hidden="true" className="planIcon far fa-check-circle"></i> {props.text}</p>
            <b className='planBtn'>{props.btn}</b>
        </div>
    </div>
  )
}

export default memo(Plan)