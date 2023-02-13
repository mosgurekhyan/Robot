import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const resetScroll = () => {
    window.scrollTo(0, 0)
  }

  const makeScroll = () => {
    window.scrollTo(0, 5700)
  }
  
  return (
    <div className='footer'>
        <div className='innerFooter'>
            <div className='innerFooter2'>
             <img className='img1' width='189px' height='23px' alt='' src='https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/logo_img.png'/>
             <ul className='ul2'>
                 <li className='li2'><NavLink to='/' onClick={resetScroll}>Home</NavLink></li>
                 <li className='li2'><NavLink to='/about' onClick={resetScroll}>About</NavLink></li>
                 <li className='li2'><NavLink to='/services' onClick={resetScroll}>Services</NavLink></li>
                 <li className='li2'><NavLink to='/contact' onClick={resetScroll}>Contact</NavLink></li>
                 <li className='li2'><NavLink to='/' onClick={makeScroll}>Pricing Plan</NavLink></li>
             </ul>
            </div>
            <div className='line'></div>
            <div className='div1'>
                <div className='iconsDiv'>
                    <i className="icon1 fa-brands fa-instagram"></i>
                    <i className="icon1 fa-brands fa-facebook-f"></i>
                    <i className="icon1 fa-brands fa-whatsapp"></i>
                </div>
                <p className='p2'>Copyright © 2021Avation, All rights reserved. Powered by Evonicmedia</p>
            </div>
        </div>
    </div>
  )
}

export default Footer