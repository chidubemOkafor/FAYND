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
import RealDetail from '../../components/details/RealDetail'
import NavsideBar from '../../components/navbar/NavsideBar'
import { sideBarContext } from '../../contexts/sideBarContext'

const LandingPage = () => {
  const {isAuth, setIsAuth} = useContext(authContext)
  const {openSidebar, setOpenSidebar} = useContext(sideBarContext)
  const [detail, setDetail] = useState(false)
  const [detailData, setDetailData] = useState([])


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
        {openSidebar && <NavsideBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>}
        {detail && <RealDetail  setDetail={setDetail} detailData={detailData} detail={detail}/>}
        <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
        <Hero/>
        {!isAuth && <Instruction/>}
        <ReportedItems  setDetail={setDetail} detailData={detailData} detail={detail} setDetailData={setDetailData}/>
        {isAuth && <FoundItems  setDetail={ setDetail} detailData={detailData} detail={detail}/>}
        <OurUsers/>
        <Footer/>
    </div>
  )
}

export default LandingPage