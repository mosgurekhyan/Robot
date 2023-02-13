import React, { useState } from 'react'

function Questions() {
  const [isActiv1, setIsActiv1] = useState(false)
  const [isActiv2, setIsActiv2] = useState(false)
  const [isActiv3, setIsActiv3] = useState(false)
  const [isActiv4, setIsActiv4] = useState(false)

  return (
    <section className='section7'>
      <div className='sec71'>
        <h1 className='title1'>FAQ</h1>
        <h1 className='h1'>How Are Robots <span className='span1'>Enhancing</span>Health Care?</h1>
        <div className={isActiv1 ? 'active2' : 'questionsDiv'} onClick={() => {setIsActiv1(!isActiv1); setIsActiv2(false); setIsActiv3(false); setIsActiv4(false)}}>
          1.What Is Lorem Ipsum ?
          <i style={{display: isActiv1 ? 'inline' : 'none', color: '#00FFB2'}} className="fa-solid fa-minus"></i><i style={{display: isActiv1 ? 'none' : 'inline'}} className="fa-solid fa-plus"></i>
        </div>
        <div className={isActiv1 ? 'mainText1' : 'mainText2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>
        <div className={isActiv2 ? 'active2' : 'questionsDiv'} onClick={() => {setIsActiv2(!isActiv2); setIsActiv1(false); setIsActiv3(false); setIsActiv4(false)}}>
          2.Why Do We Use It ?
          <i style={{display: isActiv2 ? 'inline' : 'none', color: '#00FFB2'}} className="fa-solid fa-minus"></i><i style={{display: isActiv2 ? 'none' : 'inline'}} className="fa-solid fa-plus"></i>
        </div>
        <div className={isActiv2 ? 'mainText1' : 'mainText2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>
        <div className={isActiv3 ? 'active2' : 'questionsDiv'} onClick={() => {setIsActiv3(!isActiv3); setIsActiv1(false); setIsActiv2(false); setIsActiv4(false)}}>
          3.Where Does It Come From  ?
          <i style={{display: isActiv3 ? 'inline' : 'none', color: '#00FFB2'}} className="fa-solid fa-minus"></i><i style={{display: isActiv3 ? 'none' : 'inline'}} className="fa-solid fa-plus"></i>
        </div>
        <div className={isActiv3 ? 'mainText1' : 'mainText2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>
        <div className={isActiv4 ? 'active2' : 'questionsDiv'} onClick={() => {setIsActiv4(!isActiv4); setIsActiv1(false); setIsActiv3(false); setIsActiv2(false)}}>
          4.Where Can I Get Some ?
          <i style={{display: isActiv4 ? 'inline' : 'none', color: '#00FFB2'}} className="fa-solid fa-minus"></i><i style={{display: isActiv4 ? 'none' : 'inline'}} className="fa-solid fa-plus"></i>
        </div>
        <div className={isActiv4 ? 'mainText1' : 'mainText2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>
      </div>
      <div className='sec72'></div>
    </section>
  )
}

export default Questions