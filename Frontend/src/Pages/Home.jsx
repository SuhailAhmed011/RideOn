import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <div className=' bg-cover bg-right bg-[url(public/images/BgImage.avif)] h-screen  flex justify-between flex-col w-full '>
        <img className='w-32 mb-10 ml-4' src="public/images/Ride.png" alt="Logo" />
        <div className='bg-white py-4 px-4 pb-6' >
          <h2 className='font-bold text-3xl'>Let's Start with RideOn</h2>
          <Link to='/login' className='bg-black mt-4 text-white w-full py-3 rounded flex justify-center items-center '>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home