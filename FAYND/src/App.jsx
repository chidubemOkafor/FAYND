import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChooseScreen from './pages/choose_screen/ChooseScreen'
import CreateAccount from './pages/create_account/CreateAccount';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ChooseScreen/>}/>
          <Route path='/createaccount' element={<CreateAccount/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
