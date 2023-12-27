import React,{useContext,useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import ReportedItems from '../../components/reported items/ReportedItems'
import FoundItems from '../../components/found items/FoundItems'
import OurUsers from '../../components/our users/OurUsers'
import Footer from '../../components/footer/Footer'
import { authContext } from '../../contexts/authContext'
import { loginContext } from '../../contexts/loginContext'
import Instruction from '../../components/instruction/Instruction'
import Cookies from 'js-cookie'
import axios from 'axios'

const LandingPage = () => {
  const {isAuth, setIsAuth} = useContext(authContext)
  const {setIsLoggedIn} = useContext(loginContext)
  const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;

  const config = {
    headers: {
      'Authorization': `Bearer ${Cookies.get('refresh_token')}`
    }
  }


  useEffect(() => {
    const checkAuth = () => {
      if (Cookies.get('refresh_token')) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    }
    checkAuth()
  },[])

  useEffect(() => {
    (async() => {
      try {
        const response = await axios.get(`${url}api/v1/users/profile`,config)
        setIsLoggedIn(response.data)
      } catch (error) {
        console.log(error)
      }
    })()
  },[])

  return (
    <div>
        <Navbar/>
        <Hero/>
        {!isAuth && <Instruction/>}
        <ReportedItems/>
        {isAuth && <FoundItems/>}
        <OurUsers/>
        <Footer/>
    </div>
  )
}

export default LandingPage