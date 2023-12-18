import React from 'react'
import './SideBar.css'
import profileicon from '../../assets/sidebar icons/profileicon.svg'
import messageicon from '../../assets/sidebar icons/messageicon.svg'
import bellicon from '../../assets/sidebar icons/bellicon.svg'
import priceicon from '../../assets/sidebar icons/priceicon.svg'
import itemicon from '../../assets/sidebar icons/itemicon.svg'
import logouticon from '../../assets/sidebar icons/logouticon.svg'
import faynd from '../../assets/Fynd_single.png'
import profileWoman from '../../assets/profileWoman.svg'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar_div_main'>
        <div>
            <Link to={'/'}><img src={faynd} alt='faynd logo' className='faynd_mini_logo'/></Link>
        </div>
        <ul>
            <li className='list_side_icon'><img src={profileicon} alt='icon' className='sidebar_icons'/><p className='sidebar_text'>Profile</p></li>
            <li className='list_side_icon'><img src={messageicon} alt='icon' className='sidebar_icons'/><p className='sidebar_text'>Message</p></li>
            <Link to='/profile/notification'><li className='list_side_icon'><img src={bellicon} alt='icon' className='sidebar_icons'/><p className='sidebar_text'>Notification</p></li></Link>
            <li className='list_side_icon'><img src={priceicon} alt='icon' className='sidebar_icons'/><p className='sidebar_text'>Pricing</p></li>
            <Link to='/profile/items'><li className='list_side_icon'><img src={itemicon} alt='icon' className='sidebar_icons'/><p className='sidebar_text'>Items</p></li></Link>
            <li className='list_side_icon'><img src={logouticon} alt='icon' className='sidebar_icons'/><p className='sidebar_text'>Logout</p></li>
        </ul>
        <div className='profile_pic_div'>
            <img src={profileWoman} alt="woman pic" className='profileWoman' />
            <div>
                <p className='name'>Okache Mercy </p>
                <p className='email'>mercyunique3@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar