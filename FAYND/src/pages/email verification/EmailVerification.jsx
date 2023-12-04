import React from 'react'
import curve from '../../assets/curve.svg'
import './EmailVerification.css'
import officelady from '../../assets/20.png'
import fayndLogo from '../../assets/FYND nametag wine 1.png'
import AuthCode from 'react-auth-code-input'
import fayndRench from '../../assets/Fynd_single.png'
import { Link } from 'react-router-dom'

const EmailVerification = () => {
  return (
    <div className='main_verification_div'>
        <div className='background_curve'>
            <div className='inner_curve_div'>
            <div>
                <img src={fayndRench} className='rench'/>
                <h1 className='h1'>Welcome to Safety</h1>
                <h1 className='p'>Always trust us to protect your items by registering them with us!</h1>
            </div>
                <img src={officelady} className='office_lady'/>
            </div>
        </div>
        
    <div className='right'>
        <img src={fayndLogo} className='fayndLogo'/>
        <div>
            <p className='verification_text'>Verification</p>
            <p className='confirmation'>Enter confirmation code sent to Email Address</p>
            <div className='otpDiv'>
                <AuthCode placeholder='_' inputClassName='input2' allowedCharacters='numeric' containerClassName='authcode' length={4}/>
            </div>
            <p className='time'>00:00</p>
            <p className='confirmation'>Didn’t receive code? <span className='span2'>Resend Code</span></p>
            <p className='redspan'>Change Email Address</p>
            <Link to={'/signin'}><button className='grayButton'>Continue</button></Link>
        </div>
    </div>
    </div>
  )
}

export default EmailVerification