 const rideService = require('../services/validateRides.service')
 const {validationResult} = require('express-validator')

 module.exports.createRides = async(req,res,next) => {
   const errors = validationResult(req)
   if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
   }
  const {userId, pickup, destination, vehicleType} = req.body;
  try {
const ride = await rideService.createRides({user: req.user._id, pickup, destination, vehicleType});
    return res.status(201).json(ride)
   } catch (error) {
    return res.status(400).json({message: error.message})
   }
 }