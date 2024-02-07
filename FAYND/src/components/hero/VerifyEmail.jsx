import React,{useState} from 'react'
import curve from '../../assets/curve.svg'
import './Hero.css'
import singleLogo from '../../assets/Fynd_single.png'
import fayndLogo from '../../assets/FYND nametag wine 1.png'
import AuthCode from 'react-auth-code-input'
import fayndRench from '../../assets/Fynd_single.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import woman_with_laptop from '../../assets/woman_with_laptop.svg'
import Cookies from 'js-cookie'

const VerifyEmail = () => {
    const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;
    const navigate = useNavigate()
    const [emptyField, setEmptyField] = useState(false)
    const [otpState, setOtpState] = useState(false)
    const [data, setData] = useState({
        token: "",
        reason: "report-item"
    })
    const verify = async() => {
        try {
        if(data.token === "status" || data.token === "0000") {
            setEmptyField(true)
        }
            const response = await axios.post(url + 'api/v1/users/verify-token',data)
            if(response.data.status === 200) {
                Cookies.set("report_token", response.data.data.refresh_token)
                navigate('/reportpage')
            }
        } catch (error) {
        if (error.response.data.message === "invalid code or code must have expired") {
            setOtpState(!otpState)
        } else if (error.response.data.message === "Proceed to login, Account is registered already"){
            navigate("/signin")
        }
            console.error(error)
        }
    }

    const handleChange = (value) => {
        setData((prevData) => ({
            ...prevData,
            token: value
        }));
    };

  return (
    <div className='main_verification_div'>
        <div className='background_curve'>

            <div className='inner_curve_div'>
                <div className='welcome_div'>
                    <h1 className='welcome'>Welcome to Safety</h1>
                    <h2>Always trust us to protect your items by registering them with us!</h2>
                </div>
                <img src={woman_with_laptop} className='office_lady'/>
            </div>
        </div>
        
    <div className='right'>
        <div>
            <p className='verification_text'>Verification</p>
            <p className='confirmation'>Enter confirmation code sent to Email Address</p>
            <div className='otpDiv'>
                <AuthCode placeholder='_' inputClassName={`input2 ${emptyField && 'empty_field'}`} allowedCharacters='numeric' containerClassName='authcode' length={4} onChange={handleChange} value={data.token}/>
            </div>
            
            <p className='time'>00:00</p>
            {otpState && <p className={`confirmation ${'span'}`}>Oops! wrong otp</p>}
            <p className='confirmation'>Didn’t receive code? <span className='span2'>Resend Code</span></p>
            <Link to={'/home'}><p className='redspan'>Change Email Address</p></Link>
            <button className='grayButton' onClick={verify}>Continue</button>
        </div>
    </div>
    </div>
  )
}

export default VerifyEmail