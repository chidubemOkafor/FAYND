import React,{useState} from 'react'
import './PassswordReset.css'
import eye from '../../assets/eye.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import mobileCurve from '../../assets/mobile/mobileCurve.svg'
import { checkScreen } from '../../custom hooks/checkScreen'

const NewPassword = () => {
  const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;
  const navigate = useNavigate()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [erroMessage, setErrorMessage] = useState("")
  const {windowSize} = checkScreen()
  const {width} = windowSize

  const config = {
    headers: {
      'Authorization': `Bearer ${Cookies.get('refresh_token')}`
    },
  };

  const handlePasswordSubmit = async(e) => {
    e.preventDefault()
    try {
      if(password != confirmPassword) {
        setErrorMessage("password does not match")
      } else {
        const response = await axios.patch(url + "api/v1/users/reset-password", {"password": password},config)
        if(response.data.message === "Password Reset Successful, proceed to login") {
          navigate('/signin')
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='create_account_main'>
      {width <= 723 && <img src={mobileCurve} className={`mobileCurve ${'mobileCurve_signin'}`}/>}
      <form className='resetDIv' onSubmit={handlePasswordSubmit}>
        <p className='heading_account'>Set your new Password</p>
        <p className='second_text'>Your new password must be different from previous used passwords.</p>
        <div className='newDiv'>
          <div className='input_div'>
            <label>Password</label>
            <div className='input'><input value={password} onChange={(e) => setPassword(e.target.value)} className='password_input' type='password'/>
            <img src={eye} className='eyes'/>
            </div>
          </div>
          <div className='input_div'>
            <label> Confirm Password*</label>
            <div className='input'><input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='password_input' type='password'/>
              <img src={eye} className='eyes'/>
            </div>
            {erroMessage != "" && <p className='span2'>{erroMessage}</p>}
          </div>
        </div>
        <button className={`second_gray_button ${'responsive_button2'}`} type='submit'>Reset Password</button>
      </form>
    </div>
  )
}

export default NewPassword