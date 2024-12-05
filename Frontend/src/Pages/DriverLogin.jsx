import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const DriverLogin = () => {
  const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [driverdata, setDriverdata] = useState({})

const submitHandlerButton = (e) => {
e.preventDefault();
setDriverdata({
  email: email,
  password: password
})


setEmail('')
setPassword('')
}
  return (
    <div className=" flex-col justify-between p-7 flex h-screen">
      <div>
        <img className="w-20 mb-6 " src="/images/Ride.png" alt="Logo" />
        <form onSubmit={(e) => {
          submitHandlerButton(e)
        }}>
          <h3 className="font-medium tetx-lg mb-2">What's Your Email?</h3>
          <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
            className="px-4 py-2 rounded text-lg placeholder:text-sm mb-7 bg-[#dfe6e9] border w-full"
            required
            type="email"
            placeholder="john.doe@gmail.com"
          />

          <h3 className="font-medium tetx-lg mb-2"> Password</h3>
          <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
            className="px-4 py-2 rounded text-lg placeholder:text-sm mb-7 bg-[#dfe6e9] border w-full"
            type="password"
            placeholder="password"
            required
          />
          <button className="px-4 py-2 rounded text-lg placeholder:text-sm mb-4 bg-[#f9ca24] text-white w-full">
            Login
          </button>
        </form>
        <p className="text-center">
          Join Us?{" "}
          <Link to="/driver-signup" className="text-blue-800">
            Register As Driver
          </Link>{" "}
        </p>
      </div>
      <div>
        <Link 
        to='/login'
        className="px-4 py-2 rounded text-lg placeholder:text-sm mb-7 bg-[#30336b]  flex justify-center items-center text-white font-bold w-full">
          Start As User
        </Link>
      </div>
    </div>
  )
}

export default DriverLogin