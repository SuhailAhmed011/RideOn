const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const validateRidesController = require('../controllers/validateRides.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/create',
    authMiddleware.userAuth,
    body('pickup').isString().isLength({min:3}).withMessage("Invalid pickup address"),
    body('destination').isString().isLength({min:3}).withMessage("Invalid destination address"),
    body('vehicleType').isString().isIn(['car', 'auto', 'motorcycle']).withMessage('Invalid Vehicle Type'),
    validateRidesController.createRides
)





module.exports = router