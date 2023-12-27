import React,{useContext} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import ReportedItems from '../../components/reported items/ReportedItems'
import FoundItems from '../../components/found items/FoundItems'
import OurUsers from '../../components/our users/OurUsers'
import Footer from '../../components/footer/Footer'
import { authContext } from '../../contexts/authContext'
import Instruction from '../../components/instruction/Instruction'

const LandingPage = () => {
  const {isAuth} = useContext(authContext)
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