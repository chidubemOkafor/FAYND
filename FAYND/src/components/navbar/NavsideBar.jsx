import React,{useState, useContext} from 'react'
import cancel_darker from '../../assets/cancel_darker.svg'
import { Link } from 'react-router-dom'
import { handleLogOut } from '../../custom hooks/logOut'
import { authContext } from '../../contexts/authContext'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useDetectClickOutside } from 'react-detect-click-outside'

const NavsideBar = (prop) => {
    const { isAuth } = useContext(authContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        Cookies.remove("refresh_token");
        prop.setOpenSidebar(false)
        navigate('/home');
      };

    const ref = useDetectClickOutside({ onTriggered: () => prop.setOpenSidebar(false), disableClick: true})

    return (
    <div className='main_nav_sidebar'>
        <div  ref={ref} className={`nav_sidebar ${!prop.setOpenSidebar && 'close_animate'}`}>
            <div className='menu_div'>
                <h3 className='Menu'>Menu</h3>
                <img className='cancel' src={cancel_darker} alt="cancle" onClick={() => prop.setOpenSidebar(false)}/>
            </div>
            <div className='ul_main'>
                <Link to={'/home'}><span onClick={() => prop.setOpenSidebar(false)} className='nav_bar_name'>Home</span></Link>
                <Link to={'/aboutus'}><span onClick={() => prop.setOpenSidebar(false)} className='nav_bar_name'>About us</span></Link>
                <Link to={'/search'}><span onClick={() => prop.setOpenSidebar(false)} className='nav_bar_name'>search</span></Link>
                <Link to={'/faq'}><span onClick={() => prop.setOpenSidebar(false)} className='nav_bar_name'>FAQ</span></Link>
                <Link><span onClick={() => prop.setOpenSidebar(false)} className='nav_bar_name'>Profile</span></Link>
                {isAuth ? <span className='sign' onClick={handleLogOut} >Sign out</span> : <Link to={'/signin'}><span onClick={handleLogOut} className="grayButton2">Sign in</span></Link>}
            </div>
        </div>
    </div>
    )
}

export default NavsideBar