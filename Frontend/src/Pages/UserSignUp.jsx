import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {UserDataContext} from '../context/userContext'

const UserSignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const navigate = useNavigate()
const {user, setUser} = React.useContext(UserDataContext)

  const submitHandlerButton = async (e) => {
    e.preventDefault()
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    }

    const response =  await axios.post(`${import.meta.env.VITE_MAIN_URL}/users/signup`, newUser)
    if(response.status === 201){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/Home')
    }
    
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
        <button className="px-4 py-2 rounded text-base placeholder:text-sm mb-4 bg-[#30336b] text-white w-full">
          Register
        </button>
      </form>
      <p className="text-center">
        already have account? 
        <Link to="/login" className="text-blue-800">
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

export default UserSignUp