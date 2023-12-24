import { useState, useContext } from 'react'
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
import Message from './pages/profile/messages/Message';
import Notification from './pages/profile/notification settings/Notification';
import { loginContext } from './contexts/loginContext';

function App() {
  const [data, setData] = useState({})
  const [email, setEmail] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState({})

  return (
    <>
    <loginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
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
          <Route path='/reportpage' element={<ReportPage/>}/>
          <Route path='/reportpage/confirmation' element={<Confirmation/>}/>
          <Route path='/reportpage/confirmation/congratulation' element={<Congratulation/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/profile/settings' element={<ProfileSetting/>}/>
          <Route path='/profile/items' element={<Items/>}/>
          <Route path='/profile/notification' element={<Notification/>}/>
          <Route path='/profile/message' element={<Notification/>}/>
        </Routes>
      </BrowserRouter>
      </loginContext.Provider>
      
    </>
  )
}

export default App
