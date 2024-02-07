import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChooseScreen from './pages/choose_screen/ChooseScreen'
import CreateAccount from './pages/create_account/CreateAccount';
import EmailVerification from './pages/email verification/EmailVerification';
import SignIn from './pages/sign_in/SignIn';
import PassswordReset from './pages/password reset/PassswordReset';
import PasswordResetCode from './pages/password reset/PasswordResetCode';
import NewPassword from './pages/password reset/NewPassword';
import LandingPage from './pages/landing page/LandingPage';
import ReportPage from './pages/report an item/ReportPage';
import Confirmation from './pages/confirmation/Confirmation';
import Congratulation from './pages/congratulation/Congratulation';
import FAQ from './pages/FAQ/FAQ';
import AboutUs from './pages/about us/AboutUs';
import ContactUs from './pages/contact us/ContactUs';
import ProfileSetting from './pages/profile/faynd setting/ProfileSetting';
import Items from './pages/profile/items/Items';
import Notification from './pages/profile/notification settings/Notification';
import { loginContext } from './contexts/loginContext';
import { dataContext } from './contexts/dataContext'
import { authContext } from './contexts/authContext';
import { sideBarContext } from './contexts/sideBarContext';
import ReportedAlready from './pages/congratulation/ReportedAlready';
import Search from './pages/search/Search';
import Message from './pages/profile/messages/Message';
import ProfileNav from './pages/profile/profile navigation/ProfileNav';
import VerifyEmail from './components/hero/VerifyEmail';

function App() {
  const [email, setEmail] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState({})
  const [confirmData, setConfirmData] = useState({})
  const [isAuth, setIsAuth] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <>
    <sideBarContext.Provider value={{openSidebar, setOpenSidebar}}>
    <authContext.Provider value={{isAuth, setIsAuth}}>
    <loginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <dataContext.Provider value={{confirmData, setConfirmData}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ChooseScreen/>}/>
            <Route path='/createaccount' element={<CreateAccount/>}/>
            <Route path='/emailverification' element={<EmailVerification/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/resetpassword' element={<PassswordReset email = {email} setEmail = {setEmail}/>}/>
            <Route path='/resetpassword/verifycode' element={<PasswordResetCode  email = {email} setEmail = {setEmail}/>}/>
            <Route path='/resetpassword/newpassword' element={<NewPassword/>}/>
            <Route path='/faq' element={<FAQ/>}/>
            <Route path='/home' element={<LandingPage/>}/>
            <Route path='/home/reportItemVerification' element={<VerifyEmail/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/reportpage' element={<ReportPage/>}/>
            <Route path='/reportpage/confirmation' element={<Confirmation/>}/>
            <Route path='/reportpage/confirmation/congratulation/:Rnum' element={<Congratulation/>}/>
            <Route path='/reportpage/confirmation/errorreporting' element={<ReportedAlready/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/profile' element={<ProfileNav/>}/>
            <Route path='/profile/settings' element={<ProfileSetting/>}/>
            <Route path='/profile/items' element={<Items/>}/>
            <Route path='/profile/message' element={<Message/>}/>
            <Route path='/profile/notification' element={<Notification/>}/>
          </Routes>
          </BrowserRouter>
        </dataContext.Provider>
      </loginContext.Provider>
      </authContext.Provider>
      </sideBarContext.Provider>
    </>
  )
}

export default App
