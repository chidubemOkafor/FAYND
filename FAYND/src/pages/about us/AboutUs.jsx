import Navbar from '../../components/navbar/Navbar'
import React,{useContext} from 'react'
import curve from '../../assets/curve.svg'
import singleLogo from '../../assets/Fynd_single.png'
import fayndLogo from '../../assets/FYND nametag wine 1.png'
import AuthCode from 'react-auth-code-input'
import fayndRench from '../../assets/Fynd_single.png'
import { Link } from 'react-router-dom'
import './AboutUs.css'
import image_file from '../../assets/FYND Logo wine 2.png'
import Footer from '../../components/footer/Footer'
import { checkScreen } from '../../custom hooks/checkScreen'
import { sideBarContext } from '../../contexts/sideBarContext'
import NavsideBar from '../../components/navbar/NavsideBar'

const AboutUs = () => {
  const {openSidebar, setOpenSidebar} = useContext(sideBarContext)
  const {windowSize} = checkScreen()
  console.log(windowSize.width)
  return (
    <div>
        {openSidebar && <NavsideBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>}
        <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
      <div className='main_verification_div'>
      {windowSize.width > 1320 && 
        <div className='background_curve'>
            <div className='inner_curve_div'>
                <img src={singleLogo} className='office_lady'/>
            </div>8
        </div>}
        <div className='about_logo_div'>
        {windowSize.width <= 1320 && <img src={image_file} alt='img' className='about_logo'/>}
        </div>
        <div className='right'>
            <div className='aboutus_div'>
              <p className='AboutUs'>About Us</p>
              <p className='aboutUs_text'>The Faynd Platform is a web-based solution developed to address the increasing concerns related to item theft and recovery. The platform aims to provide users with a reliable and user-friendly environment for registering their valuable items with unique identifiers and reporting them when they are stolen, with the ultimate goal of facilitating the recovery of stolen items.</p>
              <button className={`grayButton ${'responsive_button'}`}>Contact Us</button>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs