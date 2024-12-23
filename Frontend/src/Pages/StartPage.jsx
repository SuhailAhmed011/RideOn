import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div>
      <div className="bg-black h-screen w-screen absolute overflow-hidden">
        <div className="text-white">
          <h2 className="text-7xl font-sans ml-2">GO</h2>
          <h2 className="text-7xl font-sans ml-2">ANY-</h2>
          <h2 className="text-7xl font-sans ml-2">WHERE</h2>
          <div className=" relative flex items-center justify-center">
            <img
              className="w-52 mt-5"
              src="/public/images/ridewhite.png"
              alt="logo"
            />

           
            
          </div>
          <div className="flex items-center justify-center flex-col">
              <h2 className="text-lg font-sans ">Let's Start With RideOn</h2>
              <Link to='/login' className="bg-white text-black text-xl font-semibold border rounded-lg w-[60%] text-center p-3 mt-2">Continue</Link>
            </div>
            <p className="text-white text-xs mt-28 ml-1">*Not literally anywhere. See rideon.com/cities for availability.</p>
          
        </div>
        
        
        
      </div>

    </div>
  );
};

export default StartPage;
