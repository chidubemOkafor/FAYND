import React,{useContext, useEffect, useState} from 'react'
import pinkcurve from '../../assets/pinkcurve.svg'
import './Hero.css'
import eclipse1 from '../../assets/eclipse/eclipse1.svg'
import eclipse2 from '../../assets/eclipse/eclipse2.svg'
import eclipse3 from '../../assets/eclipse/eclipse3.svg'
import eclipse4 from '../../assets/eclipse/eclipse4.svg'
import shoe from '../../assets/landing page.png'
import random_curver from '../../assets/random_curver.svg'
import money_bag from '../../assets/healthicons_money-bag-outline.png'
import { authContext } from '../../contexts/authContext'
import { Link } from 'react-router-dom'
import{checkScreen} from '../../custom hooks/checkScreen'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'


const Hero = () => {
  const navigate = useNavigate()
  const {windowSize} = checkScreen()
  const width = windowSize.width
  const {isAuth} = useContext(authContext)
  const [email, setEmail] = useState("")
  const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;


  const verify = async(e) => {
    e.preventDefault()
     try {
      const response = await axios.post(`${url}api/v1/users/send-email`, {email})
      console.log(response)
      if(response.data.status === 200) {
          navigate('/home/reportItemVerification')
      }
     } catch (error) {
      console.error(error)
     }
  }

  return (
    <div className='pink_curve'>
        <div className='screen'/>
        <div className='left_text_container'>
          <h1 className='hero_title'>Report your lost items</h1>
          <h2 className='h2_text'>Reliable and efficient platform for registration of items with unique identifier, reporting of stolen items and tracking them.</h2>
          {isAuth ? 
          <Link to={'/reportpage'}><button className='hero_button'>Report your item</button></Link>
           : 
           <form className='enter_email_div' onSubmit={verify}>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' className='hero_input' placeholder='Enter your Email address' required/>
              <button className='hero_button' type='submit'>Continue</button>
           </form>
           }
          <div className='box_rot'/>
          {width > 434 && <img src={money_bag} className='money_pot'/>}
        </div>
        <img className='woman_laptop' src={shoe}/>
    </div>
  )
}

export default Hero