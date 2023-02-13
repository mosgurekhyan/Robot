import { memo } from 'react'
import './Data.css'

function Data(props) {
  return (
    <div className='dataDiv2' key={props.id}>
        <img className='dataImg' src={props.img} alt="" />
        <div className='dataDiv3'>
          <h1 className='dataName'>{props.name}</h1>
          <h3 className='dataAddress'>{props.address}</h3>
        </div>
    </div>
  )
}

export default memo(Data)