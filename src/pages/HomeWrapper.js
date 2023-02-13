import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import Part from '../components/Part/Part'

function HomeWrapper() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Part/>
      <Footer/>
    </div>
  )
}

export default HomeWrapper