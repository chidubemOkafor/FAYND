import React from 'react'
import pinkcurve from '../../assets/pinkcurve.svg'
import './Hero.css'
import eclipse1 from '../../assets/eclipse/eclipse1.svg'
import eclipse2 from '../../assets/eclipse/eclipse2.svg'
import eclipse3 from '../../assets/eclipse/eclipse3.svg'
import eclipse4 from '../../assets/eclipse/eclipse4.svg'
import shoe from '../../assets/landing page.png'

const Hero = () => {
  return (
    <div className='pink_curve'>
        <p>hello</p>
        <div className='inner_div'>
            <div>
            <img src={eclipse4}></img>
            <img src={eclipse1}></img>
            </div>
            <div>
            <img src={eclipse2}></img>
            <img src={eclipse3}></img>
            </div>
        </div>
        <img className='woman_laptop' src={shoe}/>
    </div>
  )
}

export default Hero