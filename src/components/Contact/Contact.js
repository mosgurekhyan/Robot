import { useContext } from 'react'
import ContactInputs from '../ContactInputs/ContactInputs'
import Data from '../Data/Data'
import { TitleFunction } from '../TitleFunction/TitleFunction'
import { UseContext } from '../UseContext/UseContext'
import './Contact.css'

function Contact() {
  const {data} = useContext(UseContext)

  TitleFunction('Contact - Avation')
  
  return (
    <div className='contact'>
      <div className='about1'>Contact Us</div>
      <div className='contact1'>
        {
          data.map(e => <Data key={e.id} img={e.img} name={e.name} address={e.address}/>)
        }
      </div>
      <ContactInputs/>
    </div>
  )
}

export default Contact