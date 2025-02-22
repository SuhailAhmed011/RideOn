const express = require('express')
const router = express.Router()
const {body} = require("express-validator")
const driverController = require("../controllers/driver.controller")
const authMiddleware = require("../middlewares/auth.middleware")


router.post('/signup', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min:3}).withMessage("firstName is must be at least 3 characters long"),
    body('password').isLength({min:6}).withMessage('password is must be ata least 6 characters long'),
    body('vehicle.colour').isLength({min: 3}).withMessage("colour is must be at least 3 characters long"),
    body('vehicle.plate').isLength({min: 3}).withMessage("plate must be at least 3 characters long"),
    body('vehicle.capacity').isInt({min: 1}). withMessage("capacity must be at least 1"),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid VehicleType')
], driverController.registerDriver)

router.post("/login", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min:6}).withMessage("password must be at least 6 characters long")
], driverController.loginDriver)

router.get("/profile", authMiddleware.driverAuth, driverController.getDriverProfile)

router.get("/logout", authMiddleware.driverAuth, driverController.logoutDriver)

module.exports = router