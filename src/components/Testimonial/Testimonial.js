import React, { useContext, useEffect, useState } from 'react'
import { UseContext } from '../UseContext/UseContext'

function Testimonial() {
  const {people} = useContext(UseContext)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <>
      <section className='section3'>
        <h1 className='title1'>Testimonial</h1>
        <h1 className='h1'>Succour The <span className='span1'>Customer Better</span></h1>
        <p className='p3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
      </section>
      <section className="section">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person
          let position = "nextSlide"
          if (personIndex === index) {
            position = "activeSlide"
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide"
          }
          return (
            <article key={id} className={position}>
              <div className='personDiv'>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
              </div>
              <p className="text">{quote}</p>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Testimonial