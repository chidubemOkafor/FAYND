import React,{useContext, useEffect} from 'react'
import './ProfileNav.css'
import arrowLeft from '../../../assets/arrowleft.svg'
import { loginContext } from '../../../contexts/loginContext'
import profileicon from '../../../assets/sidebar icons/profileicon.svg'
import messageicon from '../../../assets/profileNav icons/chat.svg'
import bellicon from '../../../assets/profileNav icons/bell.svg'
import priceicon from '../../../assets/profileNav icons/clipBoard.svg'
import itemicon from '../../../assets/sidebar icons/itemicon.svg'
import logouticon from '../../../assets/profileNav icons/logout.svg'
import { Link } from 'react-router-dom'
import { checkScreen } from '../../../custom hooks/checkScreen'
import Cookies from 'js-cookie'
import axios from 'axios'
import profileuser from '../../../assets/profile2.svg'

const ProfileNav = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(loginContext)
    const {windowSize} = checkScreen()
    const {width} = windowSize
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

  return (
    <div className='main_profileNav'>
        <div className='profiletitle'><Link to={'/home'}><img src={arrowLeft} alt = "arrow" className='arrow'/></Link> <p className='profileNav_title'>Profile settings</p></div>
        <div className='profileImage_div'>
            <img className='profileNavImage' src={isLoggedIn.data?.image_url === null ? profileuser : isLoggedIn.data?.image_url}/>
            <div>
                <p className='profileNav_name'>{isLoggedIn.data?.first_name} {isLoggedIn.data?.other_names}</p>
                <p className='profileNav_email'>{isLoggedIn.data?.email}</p>
            </div>
        </div>
        <div className='main_profileContainer'>
            <div className='profileContainer'>
                <Link to={'/profile/settings'}>
                    <div className='profileContainer_content'>                
                        <img src={profileicon} alt="profile" className='profileContainer_icon'/>
                        Profile
                    </div>
                </Link>
            </div>
            <div className='profileContainer'>
                <div className='profileContainer_content'>                
                    <img src={messageicon} alt="profile" className='profileContainer_icon'/>
                    Chat
                </div>
            </div>
            <div className='profileContainer'>
                <Link to={'/profile/notification'}>
                    <div className='profileContainer_content'>                
                        <img src={bellicon} alt="profile" className='profileContainer_icon'/>
                        Notification
                    </div>
                </Link>
            </div>
            <div className='profileContainer'>
                <div className='profileContainer_content'>                
                    <img src={priceicon} alt="profile" className='profileContainer_icon'/>
                    Pricing
                </div>
            </div>
            <div className='profileContainer'>
                <Link to={'/profile/items'}>
                    <div className='profileContainer_content'>                
                        <img src={itemicon} alt="profile" className='profileContainer_icon'/>
                        Items
                    </div>
                </Link>
            </div>
            <div className='profileContainer'>
                <div className='profileContainer_content' onClick={handleLogOut}>                
                    <img src={logouticon} alt="profile" className='profileContainer_icon'/>
                    Logout
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileNav