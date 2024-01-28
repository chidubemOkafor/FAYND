import React,{useState,useContext} from 'react'
import './SignIn.css'
import eye from '../../assets/eye.svg'
import google from '../../assets/google_logo.svg'
import facebook from '../../assets/facebook_logo.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { loginContext } from '../../contexts/loginContext'
import Cookies from 'js-cookie'
import { checkScreen } from '../../custom hooks/checkScreen'
import mobileCurve from '../../assets/mobile/mobileCurve.svg'

const SignIn = () => {
    const {windowSize} = checkScreen()
    const width = windowSize.width
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

    const handleLogin = async(e) => {
        e.preventDefault()
        try {
        const response  =  await axios.post(url + 'api/v1/users/login', data)
            if(response.data.message === "Login successful") {
                setIsLoggedIn(response.data.data)
                localStorage.setItem("userProfile", JSON.stringify(response.data.data))
                Cookies.set("refresh_token",response.data.data.refresh_token,{ expires: 7, sameSite: 'strict' })
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
    <div className='signin_create_account_main'>
        {width <= 927 && <img src={mobileCurve} className={`mobileCurve ${'mobileCurve_signin'}`}/>}
        <div className='signin_background'>
          <p className='heading_account'>LogIn</p>
          <p className='second_text'>Welcome back, login to your account</p>
            <form onSubmit={handleLogin}>
                <div className='mobile_form_input'>
                    <div className='input_div'>
                        <label>Email Address*</label>
                        <input name='email' value={data.email} onChange={handleChange} className='input' type='email' placeholder='youremail@gmail.com' required/>
                        {invalidGmail && <Link><p className='span2'>invalid Gmail</p></Link>}
                    </div>
                    <div className='input_div'>
                        <label>Password*</label>
                        <div className='input'><input name='password' value={data.password} onChange={handleChange} className='password_input' type='password' required/>
                            <img src={eye} className='eyes'/>
                        </div>
                        {matchingError && <Link to={'/resetpassword'}><p>invalid password <span className='span2'>Forgot Password</span></p></Link>}
                    </div>
                </div>
                <div className='bottom_div'>
                    <button className={`second_gray_button ${'responsive_button2'}`} type='submit'>Login</button>
                        <p>Don't have an account with us? <Link to={'/createaccount'}><span className='span'>Create Account</span></Link></p>
                    <p className='or'>OR</p>
                    <div className='line'/>
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