import React from 'react'

const AcceptRidePopUpPannel = (props) => {
  return (
    <div>
    <h5 onClick={()=>{
        props.setRidePopUpPannel(false)
   }} className="p-3 w-[90%] text-end absolute top-0 "><i className=" text-xl ri-arrow-down-wide-fill"></i></h5>
   <h3 className=" ml-2 text-lg font-bold">Confirm To Start Ride!!</h3>
   
   <div className='flex items-center justify-between mt-6 '>
   <div className='flex items-center gap-3'>
    <img className='h-10 w-10 rounded-full object-cover mt-2' src="https://imgs.search.brave.com/_vugX2zmin6GnFYXR4z8iB9ORAL2v0hpXlGTTuH53Zw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/MjExMjU1MS9waG90/by95b3VuZy1tYW4t/d2l0aC1tb2JpbGUt/cGhvbmUtc3RvY2st/aW1hZ2VzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz01YTB6/TU01dGJQMWFUekN0/T0xZRXFzZlplLUoy/T2NMeU56VFBlOS0y/Y2hNPQ" alt="photo" />
    <h2 className='text-lg font-medium'>Rohit Mehra</h2>
   </div>
   <h5 className='text-base font-semibold mr-4'>3 Km</h5>

   </div>
   <div className='flex gap-2 flex-col justify-between items-center'>
   

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
   <div className='flex items-center justify-between gap-5 w-full'>
   <button onClick={()=>{
    
}} className='w-full bg-[#f9ca24] rounded-xl text-white font-medium p-2 mt-5'>Confirm</button>
<button onClick={()=>{
 props.setAcceptRidePopUpPannel(false)
 props.setRidePopUpPannel(false)
}} className='w-full bg-[#ff3838] rounded-xl text-white font-medium p-2 mt-5'>Cancel</button>
   </div>
   </div>
 </div>
  )
}

export default AcceptRidePopUpPannel