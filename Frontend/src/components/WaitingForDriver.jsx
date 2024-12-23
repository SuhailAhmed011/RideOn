import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.waitingForDriver(false);
        }}
        className="p-3 w-[90%] text-end absolute top-0 "
      >
        <i className=" text-xl ri-arrow-down-wide-fill"></i>
      </h5>

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
        <button className='w-full bg-[#30336b] rounded-xl text-white font-medium p-2 mt-5'>Payment</button>
      </div>
    </div>
  );
};

export default WaitingForDriver;
