import { useContext, useEffect, useState } from "react"
import Manager from "../Manager/Manager"
import { UseContext } from "../UseContext/UseContext"

function Team() {
  const [manager, setManager] = useState(false)
  const {managers} = useContext(UseContext)

  const handleScroll = (e) => {
    if (e.target.documentElement.scrollTop > 1650){
      setManager(true)
    }
    if(e.target.documentElement.scrollTop >= 2000 && e.target.documentElement.scrollTop <= 3550){
      setManager(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <section className='section3'>
        <h1 className='title1'>Team</h1>
        <h1 className='h1'>Our Certified <span className='span1'>Scientists</span>With Smart Solutions</h1>
      </section>
      <section className='section4'>
         <div className='manage' style={{marginLeft: manager ? '0' : '-1280px'}}>
            {
              managers.map(e => <Manager key={e.id} img={e.img} name={e.name} occupation={e.occupation}/>)
            }
         </div>
      </section>
    </>
  )
}

export default Team