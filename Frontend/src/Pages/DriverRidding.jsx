import React, { useRef, useState } from 'react'
import FinishRide from '../components/FinishRide'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const DriverRidding = () => {

    const [finishedRide, setFinishedRide] = useState(false)
    const finishedRideRef = useRef(null)
    useGSAP(
        function(){
            if(finishedRide){
                gsap.to(finishedRideRef.current,{
                    transform : 'translateY(0)',
                })
               
            }else {
                gsap.to(finishedRideRef.current, {
                  transform : 'translateY(100%)',
                });
                
        }
        },[finishedRide])
  return (
    <div className="h-screen">
      <div>
        <img
          className="w-20 fixed ml-4 top-0 flex items-center"
          src="/public/images/Ride.png"
          alt="logo"
        />
      </div>
      <div className="h-4/5 ">
        <img
          className="h-full w-full object-cover"
          src="/public/images/map.jpg"
          alt="map"
        />
      </div> 
      <div className=" relative h-1/5 p-6  flex items-center justify-between bg-[#fffa65] border rounded-t-2xl "> 
        <h5 className='p-1 text-center w-[90%] absolute top-0'><i className='text-3xl mr-5 ri-arrow-up-wide-line'></i></h5>
        <h4 className='text-lg font-semibold'>3 Km away</h4>
        <button onClick={()=>{
           setFinishedRide(true)
        }} className='w-[50%] bg-[#f9ca24] rounded-xl text-white font-semibold p-2  '>Ride Completed</button>
        <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm whitespace-nowrap text-center ">
        we are on route to the destination!
    </p>
     </div>
    

     
     <div ref={finishedRideRef}  className=" fixed z-10 h-screen bottom-0 px-3 py-6 translate-y-full w-full bg-white">
        <FinishRide setFinishedRide={setFinishedRide} />
      </div>
      
    </div>
  )
}

export default DriverRidding