import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSerach from "../components/LocationSerach";
import VehiclePanel from "../components/VehiclePanel";
import SelectedRide from "../components/SelectedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenRef = useRef(null);
  const fullScreenCloseRef = useRef(null);
  const vehiclePannelRef = useRef(null);
  const selectedRidePannelRef = useRef(null);
  const lookingForRideRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [vehiclePannel, setVehiclePannel] = useState(false);
  const [selectedRidePannel, setSelectedRidePanel] = useState(false);
  const [lookingForRide, setLookingForRide] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitButtonHandler = (e) => {
    e.preventDefault();
  };

  // Using Gsap here for transition of pannels- main pannel
  useGSAP(
    function () {
      if (fullScreen) {
        gsap.to(fullScreenRef.current, {
          height: "70%",
        });
        gsap.to(fullScreenCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(fullScreenRef.current, {
          height: "0%",
        });
        gsap.to(fullScreenCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [fullScreen]
  );

  // Using Gsap here for transition of pannels- all ride pannel
  useGSAP(
    function () {
      if (vehiclePannel) {
        gsap.to(vehiclePannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePannel]
  );
  // Using Gsap here for transition of pannels- ride select pannel
  useGSAP(
    function () {
      if (selectedRidePannel) {
        gsap.to(selectedRidePannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(selectedRidePannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [selectedRidePannel]
  );
  // Using Gsap here for transition of pannels- looking for ride pannel  
  useGSAP(
    function () {
      if (lookingForRide) {
        gsap.to(lookingForRideRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(lookingForRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [lookingForRide]
  );
  // Using Gsap here for transition of pannels- waiting for driver pannel
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-20 absolute "
        src="/public/images/Ride.png"
        alt="logo"
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="/public/images/map.jpg"
          alt="map logo"
        />
        <div className="h-screen flex flex-col justify-end absolute top-0 w-full">
          <div className="h-[30%] p-5 bg-white relative">
            <h5
              ref={fullScreenCloseRef}
              onClick={() => {
                setFullScreen(false);
              }}
              className=" opacity-0 absolute top-6 right-6  text-xl"
            >
              <i className="ri-taxi-line"></i>
            </h5>
            <h3 className="text-xl font-semibold ml-2 ">Find your Ride</h3>
            <form
              onSubmit={(e) => {
                submitButtonHandler(e);
              }}
            >
              <input
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value);
                }}
                onClick={() => {
                  setFullScreen(true);
                }}
                className=" bg-[#dfe6e9] w-full py-2 px-8 rounded-lg mb-3 mt-2 text-sm"
                type="text"
                placeholder="Your Pick-Up location"
              />
              <input
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
                onClick={() => {
                  setFullScreen(true);
                }}
                className="bg-[#dfe6e9] w-full py-2 px-8 rounded-lg text-sm"
                type="text"
                placeholder="Destination"
              />
            </form>
          </div>
          <div ref={fullScreenRef} className=" bg-white  h-0 ">
            <LocationSerach
              setFullScreen={setFullScreen}
              setVehiclePannel={setVehiclePannel}
            />
          </div>
        </div>
      </div>
      // Vehicle Pannel Open Code
      <div
        ref={vehiclePannelRef}
        className=" fixed z-10 bottom-0 px-3 py-6 w-full translate-y-full bg-white"
      >
        <VehiclePanel
          setSelectedRidePanel={setSelectedRidePanel}
          setVehiclePannel={setVehiclePannel}
        />
      </div>
      <div
        ref={selectedRidePannelRef}
        className=" fixed z-10 bottom-0 px-3 py-6 w-full translate-y-full bg-white"
      >
        <SelectedRide setSelectedRidePanel={setSelectedRidePanel} setLookingForRide={setLookingForRide} /> 
      </div>
      <div ref={lookingForRideRef} className=" fixed z-10 bottom-0 px-3 py-6 w-full translate-y-full bg-white">
        
       <LookingForDriver setLookingForRide={setLookingForRide}/>
      </div>

      <div ref={waitingForDriverRef} className=" fixed z-10 bottom-0 px-3 py-6 w-full translate-y-full bg-white">
        <WaitingForDriver waitingForDriver={waitingForDriver}/>
        
       </div>
    </div>
  );
};

export default Home;
