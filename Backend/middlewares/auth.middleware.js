const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistTokenModel");
const driverModel = require("../models/driver.model");


module.exports.userAuth = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message: "Unauthorized"})
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token : token})
    if(isBlacklisted){
        return res.status(401).json({message : "unauthorized"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)

        req.user = user

        return next()
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"})
    }
}

module.exports.driverAuth = async(req,res,next)=> {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message: 'unauthorized'})
    }
   
    const isBlacklisted = await blacklistTokenModel.findOne({token : token})
    if(isBlacklisted){
        return res.status(401).json({message: 'unauthorized'})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET )
        const driver = await driverModel.findById(decoded._id)
        req.driver = driver
        return next()
    } catch (error) {
        return res.status(401).json({message: "unauthorized"})
    }
}