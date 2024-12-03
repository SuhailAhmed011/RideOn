const driverModel = require("../models/driver.model")
const driverService = require("../services/driver.service")
const {validationResult} = require('express-validator')


module.exports.registerDriver = async(req,res,next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
       return res.status(401).json({errors : errors.array()})
    }

    const {fullName, email, password, vehicle} = req.body;

    const isDriverAlreadtExists = await driverModel.findOne({email});
    
    if(isDriverAlreadtExists){
        return res.status(401).json({message: 'driver already Exists'})
    }
    const hashedPassword = await driverModel.hashPassword(password)

    const driver = await driverService.createDriver({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword,
        colour: vehicle.colour,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = driver.generateAuthToken()
    res.status(201).json({token, driver})

}
