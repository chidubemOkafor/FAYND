import React,{useContext,useEffect,useState} from 'react'
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
import Detail from '../../components/details/Detail'
import NavsideBar from '../../components/navbar/NavsideBar'

const LandingPage = () => {
  const {isAuth, setIsAuth} = useContext(authContext)
  const [delayClose, setDelayClose] = useState(false)
  const [close, setClose] = useState(true)
  const [open, setOpen] = useState(false)

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

  return (
    <div>
        {open && <NavsideBar open={open} setOpen={setOpen} delayClose={delayClose} setDelayClose={setDelayClose}/>}
        {!close && <Detail close={close} setClose={setClose}/>}
        <Navbar open={open} setOpen={setOpen}/>
        <Hero/>
        {!isAuth && <Instruction/>}
        <ReportedItems  close={close} setClose={setClose}/>
        {isAuth && <FoundItems  close={close} setClose={setClose}/>}
        {/* <OurUsers/> */}
        <Footer/>
    </div>
  )
}

export default LandingPage