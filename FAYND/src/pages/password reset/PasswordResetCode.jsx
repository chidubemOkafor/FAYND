import React from 'react'
import './PassswordReset.css'
import { Link } from 'react-router-dom'
import AuthCode from 'react-auth-code-input'

const PasswordResetCode = () => {
  return (
    <div className='create_account_main'>
    <div className='resetDIv'>
        <p className='heading_account'>Reset Password</p>
        <p className='second_text'>Input code sent to your Email Address (************************@gmail.com)</p>
        <div className='otpDiv2'>
                <AuthCode placeholder='' inputClassName='input3' allowedCharacters='numeric' containerClassName='authcode' length={4}/>
        </div>
        <Link to={'/resetpassword/newpassword'}><button className='second_gray_button'>Submit</button></Link>
        <p className='span2'>Resend code</p>
    </div>
</div>
  )
}

export default PasswordResetCode