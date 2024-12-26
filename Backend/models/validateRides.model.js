const mongoose = require('mongoose')

const ridesSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    driver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver',
        
    },
    pickup:{
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    fare:{
        type: Number,
        required: true
    },

    duration:{
        type: Number
    },
    distance:{
        type: Number
    },
    status:{
        type:String,
        enum : ['pending', 'ongoing', 'accepted', 'completed', 'cancel'],
        default: 'pending'
    },
    paymentId:{
        type: String,
    },
    orderId:{
        type: String
    },
    signature:{
        type: String
    },
    otp: {
        type: String,
        select: false,
        required: true
    }
});

module.exports = mongoose.model('ride', ridesSchema)