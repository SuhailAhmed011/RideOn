const driverModel = require("../models/driver.model")

module.exports.createDriver = async({
    firstName, lastName, email, password,colour, plate, capacity, vehicleType
}) => {
    if(!firstName || !email || !password || !colour || !plate || !capacity || !vehicleType){
        throw new error("All field are required!!")
    }
    const driver = driverModel.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password,
        vehicle : {
            colour,
            plate,
            capacity,
            vehicleType
        }
    })
    return driver
}