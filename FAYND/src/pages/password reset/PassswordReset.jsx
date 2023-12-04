import React from 'react'
import './PassswordReset.css'
import { Link } from 'react-router-dom'

const PassswordReset = () => {
  return (
    <div className='create_account_main'>
        <div className='resetDIv'>
            <p className='heading_account'>Reset your password</p>
            <p className='second_text'>Enter your email address and we will send your instructions to reset your password</p>
            <div className='input_div'>
                    <label>Email Address*</label><br/>
                    <input className='input' type='email' placeholder='youremail@gmail.com'/>
            </div>
            <Link to={'/resetpassword/verifycode'}><button className='second_gray_button'>continue</button></Link>
        </div>
    </div>
  )
}

export default PassswordReset