import React,{useState,useContext} from 'react'
import fayndLogo from '../../assets/FYND nametag wine 1.png'
import './SignIn.css'
import eye from '../../assets/eye.svg'
import google from '../../assets/google_logo.svg'
import facebook from '../../assets/facebook_logo.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { loginContext } from '../../contexts/loginContext'
import Cookies from 'js-cookie'

const SignIn = () => {
    const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;
    const navigate = useNavigate()
    const {setIsLoggedIn} = useContext(loginContext)
    const [matchingError, setMatchingError] = useState(false)
    const [invalidGmail, setInvalidGmail] = useState(false)
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    console.log(data)

    const handleLogin = async(e) => {
        e.preventDefault()
        try {
        const response  =  await axios.post(url + 'api/v1/users/login', data)
            if(response.data.message === "Login successful") {
                setIsLoggedIn(response.data.data)
                Cookies.set("refresh_token",response.data.data.refresh_token,{ expires: 7, sameSite: 'strict' })
                console.log(response)
                navigate('/home')
            }
        } catch (error) {
            if(error.response.data.message === "invalid email or password") {
                setMatchingError(true)
            } else if (error.response.data.message === "TypeError: Cannot read properties of null (reading 'password')") {
                setInvalidGmail(true)
            } else {
                console.error("Error: ",error)
            }
        }
    }

  return (
    <div className='create_account_main'>
        <div className='signin_background'>
          <p className='heading_account'>LogIn</p>
          <p className='second_text'>Welcome back, login to your account</p>
            <form onSubmit={handleLogin}>
                <div>
                    <div className='input_div'>
                        <label>Email Address*</label><br/>
                        <input name='email' value={data.email} onChange={handleChange} className='input' type='email' placeholder='youremail@gmail.com' required/>
                        {invalidGmail && <Link><p className='span2'>invalid Gmail</p></Link>}
                    </div>
                    <div className='input_div'>
                        <label>Password*</label><br/>
                        <div className='input'><input name='password' value={data.password} onChange={handleChange} className='password_input' type='password' required/>
                            <img src={eye} className='eyes'/>
                        </div>
                        {matchingError && <Link to={'/resetpassword'}><p>invalid password <span className='span2'>Forgot Password</span></p></Link>}
                    </div>
                </div>
                <div className='bottom_div'>
                    <button className='second_gray_button' type='submit'>Login</button>
                        <p>Don't have an account with us? <Link to={'/createaccount'}><span className='span'>Create Account</span></Link></p>
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