const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minlength: [3, "firstName is must be at least 3 characters long"],
    },
    lastName: {
      type: String,
      minlength: [3, "lastName is must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [8, "emial is must be at least 8 characters long"],
  },
  password: {
    type: String,
    required: true,
    select : false
  },
  socketId: {
    type: String,
  },
});


// this is used to generate token
userSchema.methods.generateAuthTokens = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
}
// its used compare the password with what user type password
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}
// its change password to hash password form
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}

const userModel = mongoose.model("user", userSchema)

module.exports = userModel