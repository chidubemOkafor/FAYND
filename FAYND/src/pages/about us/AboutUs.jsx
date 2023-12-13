import Navbar from '../../components/navbar/Navbar'
import React from 'react'
import curve from '../../assets/curve.svg'
import singleLogo from '../../assets/Fynd_single.png'
import fayndLogo from '../../assets/FYND nametag wine 1.png'
import AuthCode from 'react-auth-code-input'
import fayndRench from '../../assets/Fynd_single.png'
import { Link } from 'react-router-dom'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <div className='main_verification_div'>
        <div className='background_curve'>
            <div className='inner_curve_div'>
                <img src={singleLogo} className='office_lady'/>
            </div>
        </div>
        
    <div className='right'>
        <img src={fayndLogo} className='fayndLogo'/>
        <div className='aboutus_div'>
          <p className='AboutUs'>About Us</p>
          <p className='aboutUs_text'>The Faynd Platform is a web-based solution developed to address the increasing concerns related to item theft and recovery. The platform aims to provide users with a reliable and user-friendly environment for registering their valuable items with unique identifiers and reporting them when they are stolen, with the ultimate goal of facilitating the recovery of stolen items.</p>
          <button className='grayButton'>Contact Us</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default AboutUs