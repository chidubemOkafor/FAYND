import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import ReportedItems from '../../components/reported items/ReportedItems'
import FoundItems from '../../components/found items/FoundItems'
import OurUsers from '../../components/our users/OurUsers'
import Footer from '../../components/footer/Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <ReportedItems/>
        <FoundItems/>
        <OurUsers/>
        <Footer/>
    </div>
  )
}

export default LandingPage