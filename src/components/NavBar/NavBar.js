import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const [color, setColor] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = (e) => {
    if ((e.target.documentElement.scrollTop) > 55){
      setColor(true)
    }else {
      setColor(false)
    }
  }
  return (
    <nav style={{position: `${color ? 'absolute' : 'fixed'}`}}>
      <ul className='ul1'>
        <img width='189px' height='23px' alt='' src='https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/logo_img.png'/>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/about'>About</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/services'>Services</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/contact'>Contact</NavLink></li>
        <a className='input'>Contact Us</a>
      </ul>
    </nav>
  )
}

export default NavBar