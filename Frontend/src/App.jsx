import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import UserSignUp from './Pages/UserSignUp'
import UserLogin from './Pages/UserLogin'
import DriverSignUp from './Pages/DriverSignUp'
import DriverLogin from './Pages/DriverLogin'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<UserSignUp />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/driver-signup' element={<DriverSignUp />} />
        <Route path='/driver-login' element={<DriverLogin />} />
      </Routes>
    </div>
  )
}

export default App
