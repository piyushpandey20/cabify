import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CabDriverLogin from './pages/cabDriverLogin'
import CabDriverSignup from './pages/cabDriverSignup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/cabdriver-login' element={<CabDriverLogin/>} />
        <Route path='/cabdriver-signup' element={<CabDriverSignup/>} />
      </Routes>
    </div>
  )
}

export default App
