import React from 'react'

const StartRidding = () => {
  return (
    <div className='h-screen'>
        <div className='h-1/2'>
            <img className='h-full w-full object-cover' src="/public/images/map.jpg" alt="map" />
        </div>
        <div className='h-1/2'>
        <div className="flex items-center justify-between">
        <img className="h-12" src="/public/images/car.png" alt="car" />
        <div className="text-right">
          <h2 className="text-lg font-medium">Suhail </h2>
          <h4 className="font-bold text-xl -mt-1 -mb-1">RJ 01 XX 1990</h4>
          <h5 className="text-base text-gray-900">MG Hector</h5>
        </div>
      </div>
      <div className="flex items-centern gap-5 p-3 border-b-2">
        <i className="text-lg ri-map-pin-line"></i>
        <div>
          <h3 className="text-lg font-bold">Sector-21</h3>
          <p className="text-sm text-gray-800 -mt-1">
            Hotel Imperial Prime, Bhilwara{" "}
          </p>
        </div>
      </div>
            <button>Payment</button>
        </div>
    </div>
  )
}

export default StartRidding