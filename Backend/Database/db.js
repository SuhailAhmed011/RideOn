const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect(process.env.CONNECT_TO_DB).then(() => {
        console.log('connected to database')
    })
}

module.exports = connectToDB