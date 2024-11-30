const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()
const cors = require("cors")
const connectToDb = require("./Database/db")
connectToDb();
const userRoute = require("./routes/user.routes")
const cookieParser = require("cookie-parser")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())



app.get("/", (req,res) => {
    res.send("Hello From Express")
})

app.use("/users", userRoute)


module.exports = app