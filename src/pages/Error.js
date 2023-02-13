import { useNavigate } from "react-router-dom"
import { TitleFunction } from "../components/TitleFunction/TitleFunction"

function Error() {
  TitleFunction('Error - Avation')
  const navigate = useNavigate()
  return (
    <div className="error">
        <div className='frame'>
          <h1 className='h1'>Error <span className='span1'>404</span></h1>
          <a className='input3' onClick={() => navigate('/')}>Go Back To Home</a>
        </div>
        <div className='image3'></div>
    </div>
  )
}

export default Error