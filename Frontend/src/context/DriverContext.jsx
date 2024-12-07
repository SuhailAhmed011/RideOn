import React, {   useState } from 'react'
import {  createContext } from 'react'

 export const driverDataContext = createContext()
 

const DriverContext = ({children}) => {
   
    
        const [driver, setDriver] = useState(null)
        const [isLoding, setIsLoding] = useState(false)
        const [error, setError] = useState(null)

        const updateDriver = (driverData) => {
            setDriver(driverData)
        }
    
        const value = {
            driver,
            setDriver,
            isLoding,
            setIsLoding,
            error,
            setError
        }
  return (
    <div>
        <driverDataContext.Provider value={value} >
            {children}
        </driverDataContext.Provider>
    </div>
  )
}

export default DriverContext