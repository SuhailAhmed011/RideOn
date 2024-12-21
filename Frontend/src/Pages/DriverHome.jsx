
import React, { useRef, useState } from 'react'
import DriverDetails from "../components/DriverDetails";
import RidePopUpPannel from "../components/RidePopUpPannel";
import AcceptRidePopUpPannel from '../components/AcceptRidePopUpPannel';
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

function DriverHome() {
  const [ridePopUpPannel, setRidePopUpPannel] = useState(true)
  const [acceptRidePopUpPannel, setAcceptRidePopUpPannel] = useState(false)
  const ridePopUpPannelRef = useRef(null)
  const acceptRidePopUpPannelRef = useRef(null)
  

  useGSAP(
    function(){
        if(ridePopUpPannel){
            gsap.to(ridePopUpPannelRef.current,{
                transform : 'translateY(0)',
            })
           
        }else {
            gsap.to(ridePopUpPannelRef.current, {
              transform : 'translateY(100%)',
            });
            
    }
    },[ridePopUpPannel])

    useGSAP(
      function(){
          if(acceptRidePopUpPannel){
              gsap.to(acceptRidePopUpPannelRef.current,{
                  transform : 'translateY(0)',
              })
             
          }else {
              gsap.to(acceptRidePopUpPannelRef.current, {
                transform : 'translateY(100%)',
              });
              
      }
      },[acceptRidePopUpPannel])
  return (
    <div className="h-screen">
      <div>
        <img
          className="w-20 fixed ml-4 top-0 flex items-center"
          src="/public/images/Ride.png"
          alt="logo"
        />
      </div>
      <div className="h-3/5 ">
        <img
          className="h-full w-full object-cover"
          src="/public/images/map.jpg"
          alt="map"
        />
      </div> 
      <div className="h-2/5 p-6 bg-[#fffa65] "> 
      <DriverDetails/>
     </div>
      <div ref={ridePopUpPannelRef} className=" fixed z-10 bottom-0 px-3 py-6 translate-y-full w-full bg-white">
        <RidePopUpPannel setRidePopUpPannel={setRidePopUpPannel} setAcceptRidePopUpPannel={setAcceptRidePopUpPannel}/>
      </div>
      <div ref={acceptRidePopUpPannelRef} className=" fixed z-10 h-screen bottom-0 px-3 py-6 translate-y-full w-full bg-white">
        <AcceptRidePopUpPannel setAcceptRidePopUpPannel={setAcceptRidePopUpPannel} setRidePopUpPannel={setRidePopUpPannel}/>
      </div>
    </div>
  );
}

export default DriverHome;
