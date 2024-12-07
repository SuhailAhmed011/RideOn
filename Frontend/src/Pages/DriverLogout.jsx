import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DriverLogout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_MAIN_URL}/driver/logout`, {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }).then((res) => {
        if(res.status === 200){
            localStorage.removeItem('token')
            navigate('/driver-login')
        }
    })
  return (
    <div>DriverLogout</div>
  )
}

export default DriverLogout