import React,{useState} from 'react'
import './PassswordReset.css'
import AuthCode from 'react-auth-code-input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const PasswordResetCode = (prop) => {
  const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;
  const navigate = useNavigate()
  const [invalidOtp, setInvalidOtp] = useState("")
  const [data, setData] = useState({
    token: '',
    reason: 'password-reset'
  })

  const handleResendCode = async() => {
    try {
      await axios.post(url+ "api/v1/users/forgot-password",{"email": prop.email})
    } catch (error) {
      console.error(error)
    }
  }
 
  const handlePasswordReset = async() => {
      try {
        const response = await axios.post(url + 'api/v1/users/verify-token',data)
        if(response.data.message === "Verification successful, proceed to Reset Password") {
          console.log(response)
          const setCookie = Cookies.set("refresh_token",response.data.data.refresh_token,{ expires: 7, sameSite: 'strict' })
          if(setCookie) {
            navigate("/resetpassword/newpassword")
          }
        }
      } catch (error) {
        if(error.response.data.message === "invalid token or token may have expired") {
          setInvalidOtp("invalid token or token may have expired")
        } else if (error.response.data.message[0] === "token should not be empty") {
          setInvalidOtp("token should not be empty")
        } 
        console.error(error)
      }
  }

  const handleChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      token: value
    }))
  }

  return (
    <div className='create_account_main'>
    <div className='resetDIv'>
        <p className='heading_account'>Reset Password</p>
        <p className='second_text'>Input code sent to your Email Address (************************@gmail.com)</p>
        <div className='otpDiv2'>
                <AuthCode placeholder='' inputClassName='input3' allowedCharacters='numeric' containerClassName='authcode' length={4} value = {data.token} onChange={handleChange} required/>
        </div>
        {invalidOtp != "" && <span className='span2'>{invalidOtp}</span>}
        <button className='second_gray_button' onClick={handlePasswordReset}>Submit</button>
        <p className='span2' onClick={handleResendCode}>Resend code</p>
    </div>
</div>
  )
}

export default PasswordResetCode