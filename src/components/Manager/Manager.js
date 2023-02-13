import { memo } from 'react'
import './Manager.css'

function Manager(props) {
  return (
    <div key={props.id} className='manager'>
        <img className='managerImg' src={props.img} alt="" />
        <div className='managerData'>
            <h1 className='managerName'>{props.name}</h1>
            <p className='managerOcupation'>{props.occupation}</p>
            <div className='managerIcons'>
              <i className="icon2 fa-brands fa-instagram"></i>
              <i className="icon2 fa-brands fa-facebook-f"></i>
              <i className="icon2 fa-brands fa-whatsapp"></i>
            </div>
        </div>
    </div>
  )
}

export default memo(Manager)