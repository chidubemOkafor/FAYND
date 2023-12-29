import React from 'react'
import './Footer.css'
import FAYND from '../../assets/FYND Nametag white 1.png'
import facebook from '../../assets/socials/facebook.svg'
import google from '../../assets/socials/google.svg'
import instagram from '../../assets/socials/instagram.svg'
import linkedin from '../../assets/socials/linkedin.svg'
import twitter from '../../assets/socials/twitter.svg'
import youtube from '../../assets/socials/youtube.svg'

const Footer = () => {
  return (
    <div className='footer_main_div'>
        <div className='control_footer_div'>
            <div className='logo_find'>
                <img src={FAYND} className='FAYND_white' />
                <p className='logo_text'>FYND is an online platform  that assist in looking for missing item, just by reporting the item missing.</p>
            </div>
            <div className='inner_footer_div'>
                <ul className='footer_title'>
                    <li className='title'>Profile</li>
                    <li>My items</li>
                    <li>Profile</li>
                    <li>Notification</li>
                    <li>Message</li>
                </ul>
                <ul className='footer_title'>
                    <li className='title'>Features</li>
                    <li>Report an item</li>
                    <li>FAQs</li>
                    <li>About us</li>
                    <li>Confirm an item</li>
                </ul>
                <ul className='footer_title'>
                    <li className='title'>Contact Us</li>
                    <li>Email Address</li>
                    <li>Address</li>
                    <li>Phone Number</li>
                </ul>
            </div>
        </div>
        <div className='divider_container'>
            <div className='divider'></div>
        <div className='logo_divs'>
            <div className='inner_logo_divs'>
                <h1 className='social_media'>Social Media</h1>
                <img src={facebook} className='icon_logo'/>
                <img src={twitter} className='icon_logo'/>
                <img src={linkedin} className='icon_logo'/>
                <img src={youtube} className='icon_logo'/>
                <img src={instagram} className='icon_logo'/>
                <img src={google} className='icon_logo'/>  
            </div>
            <div className='terms_div'>
                <h1 className='social_media'>Terms of Use</h1>
                <h1 className='social_media'>Whistle Blower policy</h1>
                <h1 className='social_media'>Cookies Policy</h1>
                <h1 className='social_media'>Privacy Policy</h1>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer