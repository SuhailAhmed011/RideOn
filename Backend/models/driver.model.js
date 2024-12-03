const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const driverSchema = new mongoose.Schema({
    fullName: {
        firstName :{
            type: String,
            required : true,
            minlength : [3, 'firstName is must be at least 3 characters long']
        },
        lastName : {
            type: String,
            minlength : [3, 'lastName is must be at least 3 characters long']
        }
    },
    email : {
        type: String,
        required : true,
        unique : true,
        minlength : [8, 'email is must be at least 8 characters long']
    },
    password : {
        type : String,
        required : true,
        select : false
    },
    soketId : {
        type: String
    },
    vehicle : {
        plate : {
            type : String,
            required : true,
            minlength : [3, 'plate number is must be at least 3 characters long']
        },
        status : {
            type: String,
            enum : ['active', 'inactive'],
            default : 'inactive'
        },
        colour : {
            type: String,
            required : true,
            minlength : [3, 'colour is must be at least 3 characters long']
        },
        capacity : {
            type : Number,
            required : true,
            minlength : [1, 'capacity must be at least 1']
        },
        vehicleType : {
            type : String,
            required : true,
            enum : ['car', 'motorcycle', 'auto']
        }
    },
    location : {
        latitude : {
            type : Number
        },
        longitude : {
            type : Number
        }
    }
});


driverSchema.methods.generateAuthToken = function (){
const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: "24h"})
return token;
}

driverSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password)
}

driverSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password,10)
}

const driverModel = mongoose.model('driver', driverSchema)

module.exports = driverModel