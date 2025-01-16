import React from 'react'


const VehiclePanel = (props) => {
  return (
    // here code of vehicle pannel open
    <div>
          <h5 onClick={()=>{
          props.setVehiclePannel(false)
          props.selectVehicle('car')
        }} className="p-3 w-[90%] text-end absolute top-0 "><i className=" text-xl ri-arrow-down-wide-fill"></i></h5>
        <h3 className=" ml-2 text-lg font-medium">Book Your Ride</h3>
        <div onClick={()=>{
            props.setSelectedRidePanel(true)
            props.selectVehicle('car')
        }} className="flex items-center justify-between w-full p-3 border-2 active:border-black rounded-xl">
          <img className="h-10" src="/public/images/car.png" alt="car" />
          <div className="w-1/2">
            <h4 className="text-base font-medium ">Car <span><i className="ri-user-fill"></i>5</span></h4>
            <h5 className="text-sm font-medium ">3 mins away</h5>
            <p className="text-xs font-normal ">Comfort Rides, Affordable</p>
          </div>
          <h2 className="text-lg font-semibold">&#8377; {props.fare.car}</h2>
        </div>
        <div onClick={()=>{
            props.setSelectedRidePanel(true)
            props.selectVehicle('motorcycle')
        }} className="flex items-center mt-2 justify-between w-full p-3 border-2 active:border-black rounded-xl ">
          <img className="h-10" src="/public/images/moto.webp" alt="moto" />
          <div className="w-1/2">
            <h4 className="text-base font-medium ">Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className="text-sm font-medium ">2 mins away</h5>
            <p className="text-xs font-normal ">Comfort Rides, Affordable</p>
          </div>
          <h2 className="text-lg font-semibold">&#8377; {props.fare.motorcycle}</h2>
        </div>
        <div onClick={()=>{
            props.setSelectedRidePanel(true)
            props.selectVehicle('auto')
        }} className="flex items-center mt-2 justify-between w-full p-3 border-2 active:border-black rounded-xl ">
          <img className="h-10" src="/public/images/auto.webp" alt="auto" />
          <div className="w-1/2">
            <h4 className="text-base font-medium ">Auto <span><i className="ri-user-fill"></i>3</span></h4>
            <h5 className="text-sm font-medium ">4 mins away</h5>
            <p className="text-xs font-normal ">Comfort Rides, Affordable</p>
          </div>
          <h2 className="text-lg font-semibold">&#8377; {props.fare.auto}</h2>
        </div>
    </div>
  )
}

export default VehiclePanel