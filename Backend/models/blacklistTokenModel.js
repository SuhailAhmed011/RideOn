const mongoose = require("mongoose")

const blacklistTokenSchema = new mongoose.Schema({
    token : {
        type : String,
        required : true,
        unique : true
    },
    createdAt : {
        type : Date,
        default : Date.now,
        expires : 86400 // seconds in 24 hours
    }
})

module.exports = mongoose.model("BlackListToken", blacklistTokenSchema)