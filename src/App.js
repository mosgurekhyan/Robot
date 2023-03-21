import { useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import { UseContext } from './components/UseContext/UseContext'
import Error from './pages/Error'
import HomeWrapper from './pages/HomeWrapper'

function App() {
  const [cyberika, setCyberika] = useState([
    {
      id: '1',
      img1: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Mask-group-13.png',
      img2: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Component-4.png',
      type: 'Automation',
      about: 'Lorem Ipsum is simply dummy text of the printing.',
      more: 'Learn More'
    },
    {
      id: '2',
      img1: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Mask-group-19.png',
      img2: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Component-3-2.png',
      type: 'Machine Learning',
      about: 'Lorem Ipsum is simply dummy text of the printing.',
      more: 'Learn More'
    },
    {
      id: '3',
      img1: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Mask-group-17.png',
      img2: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Component-5.png',
      type: 'Cyber Security',
      about: 'Lorem Ipsum is simply dummy text of the printing.',
      more: 'Learn More'
    },
    {
      id: '4',
      img1: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Mask-group-18.png',
      img2: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Component-4.png',
      type: 'Cloud Computing',
      about: 'Lorem Ipsum is simply dummy text of the printing.',
      more: 'Learn More'
    }
  ])

  const [managers, setManagers] = useState([
    {
      id: '1',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/2-asian-business-man-2021-08-30-06-31-14-utc-1-1.png',
      name: 'John Edward',
      occupation: 'Operation Manager'
    },
    {
      id: '2',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/3-asian-business-man-2021-08-30-06-31-14-utc-1-1.png',
      name: 'Janna Edward',
      occupation: 'Operation Manager'
    },
    {
      id: '3',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/1-asian-business-man-2021-08-30-06-31-14-utc.png',
      name: 'Jan Edward',
      occupation: 'Operation Manager'
    }
  ])

  const [people, setPeople] = useState([
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoN2rzY1LqcCkErUNRqUEO0DFYPPeb_t3yvQ&usqp=CAU',
      name: 'maria ferguson',
      title: 'office manager',
      quote: 'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.This article will explain what management skills are, provide a list of key management skills, and demonstrate how to highlight them on your resume.',
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuAn4CfWSaki5oIpz5quznIJuo0ZqZr9lUg&usqp=CAU',
      name: 'anna doe',
      title: 'regular guy',
      quote: 'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.This article will explain what management skills are, provide a list of key management skills, and demonstrate how to highlight them on your resume.',
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnDD6uEi4_uMvRj6zoH4wq07LkF81kKRsAw&usqp=CAU',
      name: 'lily smith',
      title: 'product designer',
      quote: 'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.This article will explain what management skills are, provide a list of key management skills, and demonstrate how to highlight them on your resume.',
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0FRZHTxL49QNbvt3Pai4tSEw9PjAKQP6ew&usqp=CAU',
      name: 'susan andersen',
      title: 'the boss',
      quote: 'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag.This article will explain what management skills are, provide a list of key management skills, and demonstrate how to highlight them on your resume.',
    }
  ]) 

  const [machines, setMachines] = useState([
    {
      id: '1',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Group-6-1.png',
      name: 'Avation EMF-01',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      knob: 'Learn More'
    },
    {
      id: '2',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Group-6-1.png',
      name: 'Avation EMF-02',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      knob: 'Learn More'
    }
  ])

  const [plans, setPlans] = useState([
    {
      id: '1',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Component-1.png',
      title: 'Basic',
      price: 2.99,
      text: 'Lorem Ipsum dolor sit',
      btn: 'Get A Quote'
    },
    {
      id: '2',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Component-1.png',
      title: 'Premium',
      price: 4.39,
      text: 'Lorem Ipsum dolor sit',
      btn: 'Get A Quote'
    }
  ])

  const [talents, setTalents] = useState([
    {
      id: '1',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Mask-group-13.png',
      name: '3 Cobot Success Stories',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: '2',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Mask-group-14.png',
      name: 'Boost Your Cobot Safety Know.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: '3',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Mask-group-15.png',
      name: 'Self-Driving Vehicle Success Is Tied.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: '4',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/06/Mask-group-16.png',
      name: 'Justifying Automation Factory.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: '5',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/07/Mask-group-6.png',
      name: 'Self-Driving Vehicle Success Is Tied.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: '6',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/07/Mask-group-7.png',
      name: 'Self-Driving Vehicle Success Is Tied.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ])

  const [approaches, setApproaches] = useState([
    {
      id: '1',
      name: 'Mission',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      id: '2',
      name: 'Vision',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      id: '3',
      name: 'Goal',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    }
  ])

  const [data, setData] = useState([
    {
      id: '1',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/07/Component-4.png',
      name: 'Location',
      address: '47 Street Envato, UK'
    },
    {
      id: '2',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/07/Component-5.png',
      name: 'Phone',
      address: '0 123 456 789'
    },
    {
      id: '3',
      img: 'https://template-kit.evonicmedia.com/layout7/wp-content/uploads/2022/07/Component-6.png',
      name: 'Mail',
      address: 'test@gmail.com'
    }
  ])

  const providerValue = useMemo(() => ({data, managers, machines, talents, cyberika, approaches, people, plans}), 
  [data, managers, machines, talents, cyberika, approaches, people, plans])

  return (
    <div className="App">
      <UseContext.Provider value={providerValue}>
        <Routes>
          <Route path='/' element={<HomeWrapper/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='services' element={<Services/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </UseContext.Provider>
    </div>
  )
}

export default App
