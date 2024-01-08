import React,{useState} from 'react'
import './PassswordReset.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import mobileCurve from '../../assets/mobile/mobileCurve.svg'
import { checkScreen } from '../../custom hooks/checkScreen'

const PassswordReset = (prop) => {
  const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const {windowSize} = checkScreen()
  const {width} = windowSize

  const handlePasswordReset = async(e) => {
    e.preventDefault()
    try {
     const response = await axios.post(url+ "api/v1/users/forgot-password",{"email": email})
     if(response.data.message === "Email sent") {
        prop.setEmail(email)
        navigate('/resetpassword/verifycode')
     }
     console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='create_account_main'>
        {width <= 723 && <img src={mobileCurve} className={`mobileCurve ${'mobileCurve_signin'}`}/>}
        <div className='resetDIv'>
            <p className='heading_account'>Reset your password</p>
            <p className='second_text'>Enter your email address and we will send your instructions to reset your password</p>
            <form onSubmit={handlePasswordReset}>
              <div className='input_div'>
                  <label>Email Address*</label>
                  <input name='email' value = {email} onChange={(e) => setEmail(e.target.value)} className='input' type='email' placeholder='youremail@gmail.com' required/>
              </div>
              <button className={`second_gray_button ${'responsive_button2'}`} type='submit'>continue</button>
            </form>
        </div>
    </div>
  )
}

//<Link to={'/resetpassword/verifycode'}>

export default PassswordReset