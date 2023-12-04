import React from 'react'
import './CreateAccount.css'
import image from '../../assets/FYND nametag wine 1 (1).png'
import google from '../../assets/google_logo.svg'
import facebook from '../../assets/facebook_logo.svg'
import eye from '../../assets/eye.svg'
import Select from 'react-select'
import fayndLogo from '../../assets/FYND nametag wine 1.png'
import { Link } from 'react-router-dom'
import EmptyNav from '../../components/faynd navbars/EmptyNav'

const CreateAccount = () => {
  const countryOptions = [
    { value: 'usa', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    // Add more options as needed
  ];

  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      width: '400px', // Adjust the width as needed
      height: '50px'
    
    }),
    control: (provided, state) => ({
      ...provided,
      outline: "none",
      border: '1px solid #ced4da',
      borderRadius: '0px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#007BFF' : '#fff',
      color: state.isSelected ? '#fff' : '#333',
    }),
  };

  return (
    <div className='create_account_main'>
        <div className='account_main_form_div'>
          
        <div className='account_form_div'>
        <img src={fayndLogo} className='fayndLogo'/>
          <p className='heading_account'>Create an account</p>
          <p className='second_text'>Create account to access other features. </p>
          <form>
            <div className='create_account_form'>
              <div>
                <div className='inner_account_div'>
                  <div className='input_div'>
                    <label>Phone Number*</label><br/>
                    <input className='input' type='tel' placeholder='+2349066089664'/>
                  </div>
                  <div className='input_div'>
                    <label for='country'>Country</label><br/>
                    <Select 
                      options={countryOptions}
                      isSearchable={true}
                      styles={customStyles}
                    />
                  </div>
                  <div className='input_div'>
                    <label>Password</label><br/>
                    <div className='input'><input className='password_input' type='password'/>
                    <img src={eye} className='eyes'/>
                    </div>
                  </div>
                </div>
                <div className='inner_account_div'>
                  <div className='input_div'>
                    <label>Email Address*</label><br/>
                    <input className='input' type='email' placeholder='youremail@gmail.com'/>
                  </div>
                  <div className='input_div'>
                    <label>Full Name*</label><br/>
                    <input className='input' type='text' placeholder='John Doe'/>
                  </div>
                  <div className='input_div'>
                    <label> Confirm Password*</label><br/>
                    <div className='input'><input className='password_input' type='password'/>
                    <img src={eye} className='eyes'/>
                    </div>
                  </div>
                </div>
              </div>
              <Link to={'/emailverification'}><button className='second_gray_button'>Create An account</button></Link>
              <p>Already has an account with us? <span className='span'>Sign in</span></p>
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
    </div>
  )
}

export default CreateAccount