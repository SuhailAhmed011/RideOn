import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const DriverSignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const submitHandlerButton = (e) => {
    e.preventDefault()
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    
  }
    
  return (
    <div className=" flex-col justify-between p-7 flex h-screen">
    <div>
      <img className="w-28 mb-0 " src="/images/Ride.png" alt="Logo" />
      <form onSubmit={(e) => {
        submitHandlerButton(e)
      }}>
        <h3 className="font-medium text-base mb-2">What's Your Name</h3>
        <div className='flex gap-4 mt-4'>
        <input
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
          className="px-4 py-2 rounded text-base placeholder:text-sm mb-7 bg-[#dfe6e9] border w-full"
          required
          type="name"
          placeholder="john"
        />
        <input
       value={lastName}
       onChange={(e) => {
         setLastName(e.target.value)
       }}
       className="px-4 py-2 rounded text-base placeholder:text-sm mb-7 bg-[#dfe6e9] border w-full"
       required
       type="name"
       placeholder="doe"
     />
        </div>

        <h3 className="font-medium tetx-lg mb-2"> Email</h3>
        <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
          className="px-4 py-2 rounded text-base placeholder:text-sm mb-7 bg-[#dfe6e9] border w-full"
          type="email"
          placeholder="john.doe@gmail.com"
          required
        />
        

        <h3 className="font-medium text-base mb-2"> Password</h3>
        <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
          className="px-4 py-2 rounded text-base placeholder:text-sm mb-7 bg-[#dfe6e9] border w-full"
          type="password"
          placeholder="password"
          required
        />
        <button className="px-4 py-2 rounded text-base placeholder:text-sm mb-4 bg-[#f9ca24] text-white w-full">
          Register
        </button>
      </form>
      <p className="text-center">
        already have account? 
        <Link to="/driver-login" className="text-blue-800">
          Login here
        </Link>
      </p>
    </div>
    <div>
      <p className='text-[10px] leading-tight'>By signing up, you agree to our <span className='underline'>Terms of Service</span>  and <span className='underline'>Privacy Policy.</span>  Your data will be securely stored and used to provide and improve our services. We are committed to protecting your privacy.</p>
    </div>
  </div>
  )
}

export default DriverSignUp