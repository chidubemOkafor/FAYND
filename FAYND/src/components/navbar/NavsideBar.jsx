import React,{useState} from 'react'
import cancel_darker from '../../assets/cancel_darker.svg'
import { Link } from 'react-router-dom'

const NavsideBar = (prop) => {

    const toggleSidebarClose = () => {
        setTimeout(() => {
            prop.setDelayClose(true)
        },500)
        prop.setOpen(false)
    }

    return (
    <div className='main_nav_sidebar'>
        <div className={`nav_sidebar ${!prop.open && 'close_animate'}`}>
            <div className='menu_div'>
                <h3 className='Menu'>Menu</h3>
                <img className='cancel' src={cancel_darker} alt="cancle" onClick={toggleSidebarClose}/>
            </div>
            <div className='ul_main'>
                <Link to={'/home'}><span className='nav_bar_name'>Home</span></Link>
                <Link to={'/aboutus'}><span className='nav_bar_name'>About us</span></Link>
                <Link to={'/search'}><span className='nav_bar_name'>search</span></Link>
                <Link to={'/faq'}><span className='nav_bar_name'>FAQ</span></Link>
                <Link><span className='nav_bar_name'>Profile</span></Link>
                <Link><span className='sign'>Sign out</span></Link>
            </div>
        </div>
    </div>
    )
}

export default NavsideBar