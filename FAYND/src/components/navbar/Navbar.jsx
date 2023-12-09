import React from 'react'
import './Navbar.css'
import image from '../../assets/FYND nametag wine 1 (1).png'
import magnifying  from '../../assets/magnifying.svg'
import profile from '../../assets/profile.svg'

const Navbar = () => {
  return (
    <div className='main_navbar'>
        <div className='inner_main_div'>
            <div>
            <img className='top_image' src={image} alt="logo" />
            </div>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About Us
                </li>
                <li>
                    FAQs
                </li>
                <li>
                    Confirm
                </li>
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