import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import UserSignUp from './Pages/UserSignUp'
import UserLogin from './Pages/UserLogin'
import DriverSignUp from './Pages/DriverSignUp'
import DriverLogin from './Pages/DriverLogin'
import StartPage from './Pages/StartPage'
import UserProtected from './Pages/UserProtected'
import UserLogout from './Pages/UserLogout'
import DriverHome from './Pages/DriverHome'
import DriverProtected from './Pages/DrvierProtected'
import DriverLogout from './Pages/DriverLogout'
import StartRidding from './Pages/StartRidding'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/signup' element={<UserSignUp />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/driver-signup' element={<DriverSignUp />} />
        <Route path='/driver-login' element={<DriverLogin />} />
        <Route path='/home' element={<UserProtected><Home/></UserProtected>}/>
        <Route path='/user/logout' element = {<UserProtected><UserLogout/></UserProtected>}/>
        <Route path='/driver-home' element={<DriverProtected><DriverHome/></DriverProtected>}/>
        <Route path='/driver/logout' element = {<DriverProtected><DriverLogout/></DriverProtected>}/>
        <Route path='/riding' element = {<StartRidding/>}/>
      </Routes>
    </div>
  )
}

export default App
