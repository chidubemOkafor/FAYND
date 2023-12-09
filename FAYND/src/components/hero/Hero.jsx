import React from 'react'
import pinkcurve from '../../assets/pinkcurve.svg'
import './Hero.css'
import eclipse1 from '../../assets/eclipse/eclipse1.svg'
import eclipse2 from '../../assets/eclipse/eclipse2.svg'
import eclipse3 from '../../assets/eclipse/eclipse3.svg'
import eclipse4 from '../../assets/eclipse/eclipse4.svg'
import shoe from '../../assets/landing page.png'
import random_curver from '../../assets/random_curver.svg'

const Hero = () => {
  return (
    <div className='pink_curve'>
        <div className='left_text_container'>
          <h1 className='hero_title'>Report your lost items</h1>
          <h2 className='h2_text'>Reliable and efficient platform for registration of items with unique identifier, reporting of stolen items and tracking them.</h2>
          <button className='hero_button'>Report your item</button>
          <img src={random_curver} className='random_curver'/>
        </div>
        <img className='woman_laptop' src={shoe}/>
    </div>
  )
}

export default Hero