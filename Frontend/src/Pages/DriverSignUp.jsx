import React from "react";
import { Link } from "react-router-dom";
import { useState} from "react";
import {driverDataContext} from "../context/DriverContext"
import axios from 'axios'
import { useNavigate } from "react-router-dom";



const DriverSignUp = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const {driver, setDriver} = React.useContext(driverDataContext)

  const submitHandlerButton = async (e) => {
    e.preventDefault();
    const driverData = {
      fullName : {
        firstName : firstName,
        lastName : lastName
      },
      email : email,
      password : password,
      vehicle : {
        colour : vehicleColor,
        plate : vehiclePlate,
        capacity : vehicleCapacity,
        vehicleType : vehicleType
      }
    }

    const res = await axios.post(`${import.meta.env.VITE_MAIN_URL}/driver/signup`, driverData)
    if(res.status === 201){
      const data = res.data
      setDriver(data.driver)
      localStorage.setItem('token', data.token)
      navigate('/driver-home')

    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
  };

  return (
    <div className="flex flex-col justify-between p-6 h-screen overflow-hidden">
  <div>
    <img className="w-20 mb-4" src="/images/Ride.png" alt="Logo" />
    <form
      onSubmit={(e) => {
        submitHandlerButton(e);
      }}
    >
      <h3 className="font-medium text-base mb-2">What's Your Name</h3>
      <div className="flex gap-4 mt-2">
        <input
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          className="px-4 py-2 rounded text-sm placeholder:text-sm bg-[#dfe6e9] border w-full"
          required
          type="text"
          placeholder="john"
        />
        <input
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          className="px-4 py-2 rounded text-sm placeholder:text-sm bg-[#dfe6e9] border w-full"
          required
          type="text"
          placeholder="doe"
        />
      </div>

      <h3 className="font-medium text-base mt-4 mb-2">Email</h3>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="px-4 py-2 rounded text-sm placeholder:text-sm bg-[#dfe6e9] border w-full"
        type="email"
        placeholder="john.doe@gmail.com"
        required
      />

      <h3 className="font-medium text-base mt-4 mb-2">Password</h3>
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="px-4 py-2 rounded text-sm placeholder:text-sm bg-[#dfe6e9] border w-full"
        type="password"
        placeholder="password"
        required
      />

      <h3 className="font-medium text-base mt-4 mb-2">Vehicle</h3>
      <div className="flex gap-4 mb-4">
        <input
          required
          className="bg-[#dfe6e9] w-1/2 rounded-lg py-2 px-4 border text-sm placeholder:text-sm"
          type="number"
          placeholder="Vehicle Capacity"
          value={vehicleCapacity}
          onChange={(e) => {
            setVehicleCapacity(e.target.value);
          }}
        />

        <select
          required
          className="bg-[#dfe6e9] w-1/2 rounded-lg px-4 py-2 border text-sm placeholder:text-sm"
          value={vehicleType}
          onChange={(e) => {
            setVehicleType(e.target.value);
          }}
        >
          <option value="" disabled>
           Vehicle Type
          </option>
          <option value="car">Car</option>
          <option value="auto">Auto</option>
          <option value="moto">Moto</option>
        </select>
      </div>
      <div className="flex gap-4 mb-4">
        <input
          required
          className="bg-[#dfe6e9] w-1/2 rounded-lg px-4 py-2 border text-sm placeholder:text-sm"
          type="text"
          placeholder="Vehicle Color"
          value={vehicleColor}
          onChange={(e) => {
            setVehicleColor(e.target.value);
          }}
        />
        <input
          required
          className="bg-[#dfe6e9] w-1/2 rounded-lg px-4 py-2 border text-sm placeholder:text-sm"
          type="text"
          placeholder="Vehicle Plate"
          value={vehiclePlate}
          onChange={(e) => {
            setVehiclePlate(e.target.value);
          }}
        />
      </div>
      <button className="px-4 py-2 rounded text-sm bg-[#f9ca24] text-white w-full">
        Register
      </button>
    </form>
    <p className="text-center mt-4 text-sm">
      Already have an account?{" "}
      <Link to="/driver-login" className="text-blue-800">
        Login here
      </Link>
    </p>
  </div>
  <div>
    <p className="text-[10px] leading-tight text-center mt-12">
      By signing up, you agree to our{" "}
      <span className="underline">Terms of Service</span> and{" "}
      <span className="underline">Privacy Policy</span>. Your data will be used
      to improve our services and kept secure.
    </p>
  </div>
</div>

  )
}

export default DriverSignUp;
