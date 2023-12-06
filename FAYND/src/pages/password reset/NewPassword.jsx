import React from 'react'
import './PassswordReset.css'
import { Link } from 'react-router-dom'
import eye from '../../assets/eye.svg'

const NewPassword = () => {
  return (
    <div className='create_account_main'>
    <div className='resetDIv'>
            <p className='heading_account'>Set your new Password</p>
            <p className='second_text'>Your new password must be different from previous used passwords.</p>
        <div className='input_div'>
                    <label>Password</label><br/>
                    <div className='input'><input className='password_input' type='password'/>
                    <img src={eye} className='eyes'/>
                    </div>
                  </div>
        <div className='input_div'>
                    <label> Confirm Password*</label><br/>
                    <div className='input'><input className='password_input' type='password'/>
                    <img src={eye} className='eyes'/>
                    </div>
                  </div>
        <Link to={'/home'}><button className='second_gray_button'>Reset Password</button></Link>
    </div>
    </div>
  )
}

export default NewPassword