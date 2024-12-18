import React from "react";

const LocationSerach = (props) => {
  //Dummy data
  const locations = [
    "B-12, Near Nothing Before Coffee, Shastri Nagar, Bhilwara",
    "S-23, Opposite City Park, Mansarovar, Jaipur",
    "Building-32, Near Albaik, AndarKot, Ajmer",
    "A-31, Infront of Eidgah, Sanganer Road, Bhilwara"
  ]
  return (
    
    <div >
      {
        locations.map((el,index)=>{
          return <div key={index} onClick={()=>{
            props.setVehiclePannel(true)
            props.setFullScreen(false)
          }} className="flex items-center gap-2 m-4 border-2 border-white active:border-black rounded-xl justify-start p-3">
          <h2 className=" bg-[#dfe6e9] h-7 w-10 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill text-lg"></i>
          </h2>
          <h4 className=" bg-[#ffffff] rounded-lg font-jakarta font-bold text-sm">
            {el}
          </h4>
        </div>
        })
      }
      
      
    </div>
  );
};

export default LocationSerach;
