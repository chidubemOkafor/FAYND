import React from 'react'
import fayndLogo from '../../assets/FYND nametag wine 1.png'
import './SignIn.css'
import eye from '../../assets/eye.svg'
import google from '../../assets/google_logo.svg'
import facebook from '../../assets/facebook_logo.svg'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='create_account_main'>
        <div className='signin_background'>
        <img src={fayndLogo} className='fayndLogo'/>
          <p className='heading_account'>LogIn</p>
          <p className='second_text'>Welcome back, login to your account</p>
          <form action="">
            <div>
                <div className='input_div'>
                    <label>Email Address*</label><br/>
                    <input className='input' type='email' placeholder='youremail@gmail.com'/>
                </div>
                <div className='input_div'>
                    <label> Confirm Password*</label><br/>
                    <div className='input'><input className='password_input' type='password'/>
                        <img src={eye} className='eyes'/>
                    </div>
                    <Link to={'/resetpassword'}><p className='span2'>Forgot Password</p></Link>
                </div>
            </div>
            <div className='bottom_div'>
                    <Link><button className='second_gray_button'>Login</button></Link>
                        <p>Already has an account with us? <Link to={'/createaccount'}><span className='span'>Create Account</span></Link></p>
                    <p className='or'>OR</p>
                    <div className='line'></div>
                    <p>Sign up with</p>
                    <div className='logo_button'>
                        <img className='logo_box' src={google}/>
                        <img className='logo_box' src={facebook}/>
                    </div>
                </div>
          </form>
        </div>
    </div>
  )
}

export default SignIn