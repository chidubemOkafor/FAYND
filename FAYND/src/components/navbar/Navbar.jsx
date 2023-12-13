import React from 'react'
import './Navbar.css'
import image from '../../assets/FYND nametag wine 1 (1).png'
import magnifying  from '../../assets/magnifying.svg'
import profile from '../../assets/profile.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='main_navbar'>
        <div className='inner_main_div'>
            <div>
            <img className='top_image' src={image} alt="logo" />
            </div>
            <ul>
            <Link to={'/home'}><li>Home</li></Link>
            <Link to={'/aboutus'}><li>About Us</li></Link>
            <Link to={'/faq'}><li>FAQs</li></Link>
            <Link to={'/contactus'}><li>Contact us</li></Link>
            </ul>
            <div className='right_icon_div'>
                <img className='icon' src={magnifying} alt="magnifying" />
                <img className='icon' src={profile} alt="profile" />
            </div>
        </div>
    </div>
  )
}

export default Navbar