import React from 'react'

const DriverDetails = () => {
  return (
    <div  >
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-start gap-3">
          <img className="h-10 w-10 rounded-full object-cover" src="https://imgs.search.brave.com/wKgzoAElkv32-oIT1yZZCSoYv0B5SEFB_cSHx0LVZ30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/NzQ5NDY5Ni9waG90/by9pbmRpYW4tbWFu/LXN0dWRpby1wb3J0/cmFpdC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NTFWdDda/UTd0NG5iQUR0d1Z6/UmRGZnAzRDB3clFt/d2RnZEt6aU1HMXQw/ND0" alt="photo" />
          <h4 className="text-lg font-medium">Sameer Chhipa</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">&#8377; 580.45</h4>
            <p className="text-sm ml-7  text-gray-800">Profit</p>
          </div>
      </div>

      <div className="flex justify-center items-start gap-5 p-3 bg-gray-50 rounded-xl mt-1">
        <div className="text-center">
        <i className="text-3xl mb-2 font-light ri-speed-up-line"></i>
        <h5 className="text-lg font-medium">60 Km/h</h5>
        <p className="text-sm text-gray-900">Speed</p>
        </div>
        <div  className="text-center">
        <i className="text-3xl mb-2 font-light ri-timer-flash-line"></i>
        <h5 className="text-lg font-medium">5.5</h5>
        <p className="text-sm text-gray-900">Hours Online</p>
        </div>
        <div className="text-center">
        <i className="text-3xl mb-2 font-light ri-sticky-note-line"></i>
        <h5 className="text-lg font-medium">2</h5>
        <p className="text-sm text-gray-900">Available</p>
       
        </div>
        
      </div>
      <div>
          <div className='flex items-center justify-center mt-5'>
            <h3 className='text-lg font-semibold'>Rating:</h3>
            <div className='flex items-center'>
              <h2><i className=" text-lg ri-star-s-fill"></i></h2>
              <h2><i className=" text-lg ri-star-s-fill"></i></h2>
              <h2><i className=" text-lg ri-star-s-fill"></i></h2>
              <h2><i className=" text-lg ri-star-s-fill"></i></h2>
              <h2><i className=" text-lg ri-star-half-s-line"></i></h2>
            </div>
           
          </div>
          <p className='text-center text-base font-medium'>(4.5)</p>
        </div>
    </div>
  )
}

export default DriverDetails