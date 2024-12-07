import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { driverDataContext } from '../context/DriverContext'
import axios from 'axios'

const DriverProtected = ({children}) => {
   const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {driver, setDriver} = useContext(driverDataContext)
    const [isLoding, setIsLoding] = useState(true)


    useEffect(()=> {
        if(!token){
            navigate('/driver-login')
        }
        axios.get(`${import.meta.env.VITE_MAIN_URL}/driver/profile`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            if(res.status === 200){
                setDriver(res.data.driver)
                setIsLoding(false)
            }
        }).catch(err => {
           
            localStorage.removeItem('token')
            navigate('/driver-login')
            
        })
    }, [token])

    

   
  return (
    <>
    {children}
    </>
  )
}

export default DriverProtected