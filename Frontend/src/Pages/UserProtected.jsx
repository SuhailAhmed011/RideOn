import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import axios from 'axios'

const UserProtected = ({children}) => {
  const {user, setUser} = useContext(UserDataContext)
  const [isLoding, setIsLoding] = useState(true)
   const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(()=> {
        if(!token){
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_MAIN_URL}/users/profile`,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        }).then(res => {
          if(res.status === 200){
            setUser(res.data.user)
            setIsLoding(false)
          }
        }).catch(err => {
          localStorage.removeItem('token')
          navigate('/login')
        })

    }, [token])
  return (
    <>
    {children}
    </>
  )
}

export default UserProtected