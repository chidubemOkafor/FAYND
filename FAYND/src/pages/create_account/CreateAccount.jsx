import React, { useState, useEffect } from 'react';
import './CreateAccount.css';
import image from '../../assets/FYND nametag wine 1 (1).png';
import google from '../../assets/google_logo.svg';
import facebook from '../../assets/facebook_logo.svg';
import eye from '../../assets/eye.svg';
import eyeoff from '../../assets/eyeoff.svg';
import Select from 'react-select';
import fayndLogo from '../../assets/FYND nametag wine 1.png';
import { Link } from 'react-router-dom';
import EmptyNav from '../../components/faynd navbars/EmptyNav';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { checkScreen } from '../../custom hooks/checkScreen'
import mobileCurve from '../../assets/mobile/mobileCurve.svg'
import {country} from './country'
import { countryAndState } from '../../custom hooks/countryAndStates';

const CreateAccount = () => { 
  const {windowSize} = checkScreen()
  const width = windowSize.width
  const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;
  const navigate = useNavigate()
  const [emailError, setEmailError] = useState("")
  const [MatchingError, setMatchingError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordInitial, setPasswordInitial] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const [callcode, setCallcode] = useState("+234")
  const [data, setData] = useState({
    first_name: '',
    other_names: '',
    email: '',
    password: '', // Initialize password field in data state
    country: 'select a country',
    state: '',
    phone_number: '',
  });
  //==================================================================================//
  const { callcode, state, handleCodeSelect } = countryAndState()


  // =======================================auth=======================================//
  const handleAccountCreation = async (e) => {
    e.preventDefault();
    try {
      if (data.password !== confirmPassword) {
        setMatchingError(!MatchingError);
      } else {
        const phoneNumberWithCode = callcode + data.phone_number
        const newData = {...data, phone_number: phoneNumberWithCode}
        const response = await axios.post(url + 'api/v1/users/register', newData);
        if(response.data.message === "Email Verification code sent, please check your email to get code") {
          navigate('/emailverification')
        }
      }
    } catch (error) {
      if (error.response.data.message === "Email is associated with another account, please use another Email.") {
        setEmailError("account with email already exists")
      }
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setEmailError("")
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //===================================================================================//




  return (
    <div className="create_account_main">
      {width <= 927 && <img src={mobileCurve} className={`mobileCurve ${'mobileCurve_signin'}`}/>}
      <div className="account_main_form_div">
        <div className="account_form_div">
          <p className="heading_account">Create an account</p>
          <p className="second_text">
            Create account to access other features.{' '}
          </p>
          <form onSubmit={handleAccountCreation}>
            <div className="create_account_form">
              <div className='grid_div'>
                  <div className="input_div">
                    <label>Phone Number*</label>
                    <div className='main_div_input'>
                      <div className='callcode'>{callcode}</div>
                       <InputMask
                      name="phone_number"
                      value={data.phone_number}
                      onChange={handleChange}
                      className="number_input"
                      mask="9999999999"
                      placeholder="9060000000"
                      required
                    />
                    </div>
                  </div>
                  <div className="input_div">
                    <label>Email Address*</label>
                    <input
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      className="input"
                      type="email"
                      placeholder="youremail@gmail.com"
                      required
                    />
                    {emailError !== "" && <span className='span2' style={{marginTop: 65, position:'absolute'}}>{emailError}</span>}
                  </div>
                  <div className="input_div">
                    <label>First Name*</label>
                    <input
                      name="first_name"
                      value={data.first_name}
                      onChange={handleChange}
                      className="input"
                      type="tel"
                      placeholder="Max"
                      required
                    />
                  </div>
                  <div className="input_div">
                    <label>Other Names*</label>
                    <input
                      name="other_names"
                      value={data.other_names}
                      onChange={handleChange}
                      className="input"
                      type="text"
                      placeholder="James Gaius"
                      required
                    />
                  </div>
                  <div className="input_div">
                    <label htmlFor="country">Country</label>
                    <select
                      id="countryDropdown"
                      name="country"
                      value={data.country}
                      onChange={(e) => {
                        handleChange(e);
                        handleCodeSelect(e.target.selectedIndex);
                      }}
                      className="input_dropdown"
                    >
                      {country.map((countr, index) => (
                        <option key={index}>{countr.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="input_div">
                    <label>State*</label>
                    <select
                      id="countryDropdown"
                      name="state"
                      value={data.state}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      className="input_dropdown"
                    >
                      {state.map((st, index) => (
                        <option key={index}>{st.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="input_div">
                    <label>Password</label>
                    <div className="input">
                      <input
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        className="password_input"
                        type={!showPassword ? 'password' : 'text'}
                        required
                      />
                      <img
                        src={!showPassword ? eyeoff : eye}
                        className="eyes"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>
                  </div>
                  <div className="input_div">
                    <label> Confirm Password*</label>
                    <div className="input">
                      <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="password_input"
                        type={!showPassword ? 'password' : 'text'}
                        required
                      />
                      <img
                        src={!showPassword ? eyeoff : eye}
                        className="eyes"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>
                    {MatchingError && (
                      <span className={'span3'}>password does not match</span>
                    )}
                  </div>
              </div>
              <button className={`second_gray_button ${'responsive_button2'}`} type="submit">
                Create An account
              </button>
              <div className='lower_part'>
                  <p>
                    Already have an account with us?{' '}
                    <Link to={'/signin'}><span className="span">Sign in</span></Link>
                  </p>
                  <p className="or">OR</p>
                  <div className="line"></div>
                  <p>Sign up with</p>
                  <div className="logo_button">
                    <img className="logo_box" src={google} />
                    <img className="logo_box" src={facebook} />
                  </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
