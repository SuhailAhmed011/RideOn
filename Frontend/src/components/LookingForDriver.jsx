import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
    <h5 onClick={()=>{
     props.setLookingForRide(false)
   }} className="p-3 w-[90%] text-end absolute top-0 "><i className=" text-xl ri-arrow-down-wide-fill"></i></h5>
   <h3 className=" ml-2 text-lg font-medium">Wait! We are Looking For Driver</h3>
   
   <div className='flex gap-2 flex-col justify-between items-center'>
   <img className='h-20' src="/public/images/car.png" alt="car" />

   <div className='w-full mt-5'>
   <div className='flex items-centern gap-5 p-3 border-b-2'>
   <i className=" text-lg ri-map-pin-3-fill"></i>
   <div>
     <h3 className='text-lg font-bold'>A-31</h3>
     <p className='text-sm text-gray-800 -mt-1'>Near Jaipur Store, Sanganer Road, Bhilwara </p>
   </div>
   </div>
   <div className='flex items-centern gap-5 p-3 border-b-2'>
   <i className="text-lg ri-map-pin-line"></i>
   <div>
     <h3 className='text-lg font-bold'>Sector-21</h3>
     <p className='text-sm text-gray-800 -mt-1'>Hotel Imperial Prime, Bhilwara </p>
   </div>
   </div>
   <div className='flex items-centern gap-5 p-3 '>
   <i className=" text-lg ri-cash-line"></i>
   <div>
     <h3 className='text-lg font-bold'>&#8377;174.30</h3>
     <p className='text-sm text-gray-800 -mt-1'>Cash </p>
   </div>
   </div>
   </div>
   
   </div>
 </div>
  )
}

export default LookingForDriver