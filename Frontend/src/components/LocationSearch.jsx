import React from "react";


  const LocationSearchPanel = ({ suggestions, setVehiclePannel, setFullScreen, setPickup, setDestination, activeField }) => {
    const handleSuggestionClick = (suggestion) => {
      if (activeField === 'pickup') {
          setPickup(suggestion)
      } else if (activeField === 'destination') {
          setDestination(suggestion)
      }
     
  
  }
  return (
    
    <div >
      {
        suggestions.map((el,index)=>{
          return <div key={index} onClick={()=>handleSuggestionClick(el)} className="flex items-center gap-2 m-4 border-2 border-white active:border-black rounded-xl justify-start p-3">
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

export default LocationSearchPanel;
