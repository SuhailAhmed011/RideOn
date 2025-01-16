const validateRideModel = require('../models/validateRides.model')
const mapService = require('../services/maps.service')
const crypto = require('crypto')

module.exports.createRides = async({user, pickup, destination, vehicleType})=>{

    if(!user || !pickup || !destination || !vehicleType){
        throw new Error("All fields are required!!")
    }
    const fare = await getFare(pickup,destination)
    const ride = validateRideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(4),
        fare: fare[vehicleType]
    })
    return ride
}

async function getFare(pickup, destination){
    if(!pickup || !destination){
        throw new Error('pickup and destination are required!!')
    }

    const timeDistance = await mapService.getTimeDistance(pickup,destination)

    const baseFare = {
        car: 40,
        auto: 30,
        motorcycle: 20
    }

    const perKmPrice = {
        car : 13,
        auto: 10,
        motorcycle: 8
    }

    const perMinPrice = {
        car: 4,
        auto: 3,
        motorcycle: 2
    }

    const fare = {
        car: Math.round(baseFare.car + ((timeDistance.distance.value / 1000) * perKmPrice.car) + ((timeDistance.duration.value / 60) * perMinPrice.car)),
        auto: Math.round(baseFare.auto + ((timeDistance.distance.value / 1000) * perKmPrice.auto) + ((timeDistance.duration.value / 60) * perMinPrice.auto)),
        motorcycle: Math.round(baseFare.motorcycle + ((timeDistance.distance.value / 1000) * perKmPrice.motorcycle) + ((timeDistance.duration.value / 60) * perMinPrice.motorcycle))
    }
    return fare

}

module.exports.getFare = getFare

function getOtp(num){
    function generateOtp(num){
        const otp = crypto.randomInt(Math.pow(10, num-1),Math.pow(10, num)).toString();
        return otp
    }
    return generateOtp(num)
   
}