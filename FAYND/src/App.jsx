import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChooseScreen from './pages/choose_screen/ChooseScreen'
import CreateAccount from './pages/create_account/CreateAccount';
import EmailVerification from './pages/email verification/EmailVerification';
import SignIn from './pages/sign_in/SignIn';
import PassswordReset from './pages/password reset/PassswordReset';
import PasswordResetCode from './pages/password reset/PasswordResetCode';
import NewPassword from './pages/password reset/NewPassword';
import LandingPage from './pages/landing page/LandingPage';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ChooseScreen/>}/>
          <Route path='/createaccount' element={<CreateAccount/>}/>
          <Route path='/emailverification' element={<EmailVerification/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/resetpassword' element={<PassswordReset/>}/>
          <Route path='/resetpassword/verifycode' element={<PasswordResetCode/>}/>
          <Route path='/resetpassword/newpassword' element={<NewPassword/>}/>
          <Route path='/home' element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
