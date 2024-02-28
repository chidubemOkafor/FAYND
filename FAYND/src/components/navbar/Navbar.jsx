import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import image from '../../assets/FYND nametag wine 1 (1).png';
import magnifying from '../../assets/magnifying.svg';
import profile from '../../assets/profile.svg';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/authContext';
import hamburger from '../../assets/hamburger.svg';
import { checkScreen } from '../../custom hooks/checkScreen';


const Navbar = (prop) => {
  const { isAuth } = useContext(authContext);
  const {windowSize: {width}} = checkScreen()

  const handleOpen = () => {
    prop.setOpenSidebar(true)
  }

  return (
    <div className='main_navbar'>
      <div className='inner_main_div'>
        <div>
          <img className='top_image' src={image} alt='logo' />
        </div>
        {width > 1024 ? (
          <>
            <ul>
              <Link to={'/home'}>
                <li className='navLink'>Home</li>
              </Link>
              <Link to={'/aboutus'}>
                <li>About Us</li>
              </Link>
              <Link to={'/faq'}>
                <li>FAQs</li>
              </Link>
              <Link to={'/contactus'}>
                <li>Contact us</li>
              </Link>
            </ul>
            <>
              {isAuth ? (
                <div className='right_icon_div'>
                  <Link to={'/search'}>
                    <img className='icon' src={magnifying} alt='magnifying' />
                  </Link>
                  {/* 983 */}
                  <Link to={width >= 983 ? '/profile/settings' : '/profile'}>
                    <img className='icon' src={profile} alt='profile' />
                  </Link>
                </div>
              ) : (
                <div className='create_account_div'>
                  <Link to={'/signin'}>
                    <p className='signin_buttton'>Sign in</p>
                  </Link>
                  <Link to={'/createaccount'}>
                    <div className='grayButton2'>Create account</div>
                  </Link>
                </div>
              )}
            </>
          </>
        ) : (
          <img src={hamburger} alt='hamburger' onClick={handleOpen} className='hamburger'/>
        )}
      </div>
    </div>
  );
};

export default Navbar;
