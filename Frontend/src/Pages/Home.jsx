import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSerach from "../components/LocationSerach";
import VehiclePanel from "../components/VehiclePanel";
import SelectedRide from "../components/SelectedRide";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenRef = useRef(null);
  const fullScreenCloseRef = useRef(null);
  const vehiclePannelRef = useRef(null);
  const selectedRidePannelRef = useRef(null)
  const [vehiclePannel, setVehiclePannel] = useState(false);
  const [selectedRidePannel, setSelectedRidePanel] = useState(false)

  const submitButtonHandler = (e) => {
    e.preventDefault();
  };

  // Using Gsap here for transition of pannels
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

  // Using Gsap here for transition of pannels
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
  // Using Gsap here for transition of pannels
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
        <VehiclePanel setSelectedRidePanel={setSelectedRidePanel} setVehiclePannel={setVehiclePannel} />
      </div>

      <div
        ref={selectedRidePannelRef}
        className=" fixed z-10 bottom-0 px-3 py-6 w-full translate-y-full bg-white"
      >
        <SelectedRide/>
      </div>
    </div>
  );
};

export default Home;
