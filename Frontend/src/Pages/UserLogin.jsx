import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ userData, setUserData ] = useState({})

  const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()



  const submitHandlerButton = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_MAIN_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setPassword('')
  }

  return (
    <div className=" flex-col justify-between p-7 flex h-screen">
      <div>
        <img className="w-20 mb-6 " src="/images/Ride.png" alt="Logo" />
        <form
          onSubmit={(e) => {
            submitHandlerButton(e);
          }}
        >
          <h3 className="font-medium tetx-lg mb-2">What's Your Email?</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
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
              setPassword(e.target.value);
            }}
            className="px-4 py-2 rounded text-lg placeholder:text-sm mb-7 bg-[#dfe6e9] border w-full"
            type="password"
            placeholder="password"
            required
          />
          <button className="px-4 py-2 rounded text-lg placeholder:text-sm mb-4 bg-[#30336b] text-white w-full">
            Login
          </button>
        </form>
        <p className="text-center">
          Are you new here?{" "}
          <Link to="/signup" className="text-blue-800">
            Create New Account
          </Link>{" "}
        </p>
      </div>
      <div>
        <Link
          to="/driver-login"
          className="px-4 py-2 rounded text-lg placeholder:text-sm mb-7 bg-[#f9ca24] flex justify-center items-center text-white font-bold w-full"
        >
          Start As Driver
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
