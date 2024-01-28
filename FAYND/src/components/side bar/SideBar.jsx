import React,{useContext,useEffect} from 'react'
import './SideBar.css'
import profileicon from '../../assets/sidebar icons/profileicon.svg'
import messageicon from '../../assets/sidebar icons/messageicon.svg'
import bellicon from '../../assets/sidebar icons/bellicon.svg'
import priceicon from '../../assets/sidebar icons/priceicon.svg'
import itemicon from '../../assets/sidebar icons/itemicon.svg'
import logouticon from '../../assets/sidebar icons/logouticon.svg'
import faynd from '../../assets/Fynd_single.png'
import { Link } from 'react-router-dom'
import profileuser from '../../assets/profile2.svg'
import { loginContext } from '../../contexts/loginContext'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {checkScreen} from '../../custom hooks/checkScreen'

const SideBar = () => {
  const {windowSize} = checkScreen()
  const {width} = windowSize
  const navigate = useNavigate()
  const {isLoggedIn,setIsLoggedIn} = useContext(loginContext)
  const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;

  const handleLogOut = () => {
    Cookies.remove("refresh_token");
    navigate('/home');
  };

  const config = {
    headers: {
      'Authorization': `Bearer ${Cookies.get('refresh_token')}`
    }
  }

  useEffect(() => {
    const refresh = async() => {
      try {
        const response = await axios.get(`${url}api/v1/users/profile`,config)
        setIsLoggedIn(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    refresh()
  },[])
//${width <= 1040 && 'mobile_sidebar_div_main' }
  return (
    <div className={`sidebar_div_main `}>
        <div>
            <Link to={'/home'}><img src={faynd} alt='faynd logo' className='faynd_mini_logo'/></Link>
        </div>
        <ul>
            <Link to='/profile/settings'><li className='list_side_icon'><img src={profileicon} alt='icon' className='sidebar_icons'/><p className='sidebar_text'>Profile</p></li></Link>
            <Link to='/profile/message'><li className='list_side_icon'><img src={messageicon} alt='icon' className='sidebar_icons'/><p className='sidebar_text'>Message</p></li></Link>
            <Link to='/profile/notification'><li className='list_side_icon'><img src={bellicon} alt='icon' className='sidebar_icons'/><p className='sidebar_text'>Notification</p></li></Link>
            <li className='list_side_icon'><img src={priceicon} alt='icon' className='sidebar_icons'/><p className='sidebar_text'>Pricing</p></li>
            <Link to='/profile/items'><li className='list_side_icon'><img src={itemicon} alt='icon' className='sidebar_icons'/><p className='sidebar_text'>Items</p></li></Link>
            <li className='list_side_icon'><img src={logouticon} alt='icon' className='sidebar_icons'/><p className='sidebar_text' onClick={handleLogOut}>Logout</p></li>
        </ul>
        <div className='profile_pic_div'>
            <img src={isLoggedIn.data?.image_url == null ? profileuser : isLoggedIn.data?.image_url} alt="woman pic" className='profileWoman' />
            <div>
                <p className='name'>{isLoggedIn.data?.first_name} {isLoggedIn.data?.other_names}</p>
                <p className='email'>{isLoggedIn.data?.email}</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar