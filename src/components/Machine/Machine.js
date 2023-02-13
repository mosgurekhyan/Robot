import { memo, useEffect, useState } from 'react'
import './Machine.css'

function Machine(props) {
    const [machine, setMachine] = useState(false)
    const handleScroll = (e) => {
      if (e.target.documentElement.scrollTop > 3540){
        setMachine(true)
      }
      if(e.target.documentElement.scrollTop >= 3600 && e.target.documentElement.scrollTop <= 5300){
        setMachine(false)
      }
    }
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
       return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return (
        <div className='machine' key={props.id}>
            <img className='machineImage' style={{transform: machine ? 'rotateZ(180deg)' : 'none'}} src={props.img} alt="" />
            <div className='machineData'>
              <h2 className='machineName'>{props.name}</h2>
              <h3 className='machineAbout'>{props.about}</h3>
              <b className='machineBtn'>{props.knob} <i className="fa-solid fa-arrow-right"></i></b>
            </div>
        </div>
    )
}

export default memo(Machine)