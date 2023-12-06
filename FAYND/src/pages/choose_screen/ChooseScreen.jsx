import React from 'react'
import curve from '../../assets/curve.svg'
import '../email verification/EmailVerification.css'
import singleLogo from '../../assets/Fynd_single.png'
import fayndLogo from '../../assets/FYND nametag wine 1.png'
import AuthCode from 'react-auth-code-input'
import fayndRench from '../../assets/Fynd_single.png'
import './ChooseScreen.css'
import { Link } from 'react-router-dom'

const EmailVerification = () => {
  return (
    <div className='main_verification_div'>
        <div className='background_curve'>
            <div className='inner_curve_div'>
                <img src={singleLogo} className='office_lady'/>
            </div>
        </div>
        
    <div className='right'>
        <img src={fayndLogo} className='fayndLogo'/>
        <div>
            <p className='verification_text'>Report your items!</p>
            <p className='confirmation'>Register, report and track your item with us!</p>
            <Link to={'/createaccount'}><button className='gray_button'>Create Account</button></Link>
            <Link to={'/signin'}><button className='transparent_button'>Login</button></Link>
            <p className='underline_button'>Register items</p>
            
        </div>
    </div>
    </div>
  )
}

export default EmailVerification