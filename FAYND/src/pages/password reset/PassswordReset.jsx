import React,{useState} from 'react'
import './PassswordReset.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PassswordReset = (prop) => {
  const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;
  const navigate = useNavigate()
  const [email, setEmail] = useState("")

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
        <div className='resetDIv'>
            <p className='heading_account'>Reset your password</p>
            <p className='second_text'>Enter your email address and we will send your instructions to reset your password</p>
            <form onSubmit={handlePasswordReset}>
              <div className='input_div'>
                      <label>Email Address*</label><br/>
                      <input name='email' value = {email} onChange={(e) => setEmail(e.target.value)} className='input' type='email' placeholder='youremail@gmail.com' required/>
              </div>
              <button className='second_gray_button' type='submit'>continue</button>
            </form>
        </div>
    </div>
  )
}

//<Link to={'/resetpassword/verifycode'}>

export default PassswordReset