const blacklistTokenModel = require("../models/blacklistTokenModel")
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

module.exports.loginDriver = async(req,res,next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body;
    const driver = await driverModel.findOne({email}).select("+password");
    if(!driver){
        return res.status(400).json({message: 'Invalid email or password'})
    }

    const isMatch = await driver.comparePassword(password)
    if(!isMatch){
        return res.status(400).json({message: 'Invalid email or password'})
    }
    const token = driver.generateAuthToken()
    res.cookie('token', token)
    res.status(200).json({token, driver})
}

module.exports.getDriverProfile = async(req,res,next) =>{
    res.status(201).json({driver: req.driver})
}

module.exports.logoutDriver = async(req,res,next) => {
    res.clearCookie('token')
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]
    await blacklistTokenModel.create({token})
    res.status(200).json({message: "Logged Out"})
}