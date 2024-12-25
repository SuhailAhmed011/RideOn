const mapService = require('../services/maps.service')
const {validationResult} = require('express-validator')

module.exports.getCoordinates = async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({erros: errors.array()})
    }
    const {address} = req.query;
    try {
        const coordinates = await mapService.getAddressCordinates(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({ message: 'Coordinates not found' });
    }

}

module.exports.getTimeDistance = async (req, res, next) => {
    try {
        // Validate the query parameters (origin, destination)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Extract origin and destination from query parameters
        const { origin, destination } = req.query;

        // Call the map service to fetch time and distance
        const timeDistance = await mapService.getTimeDistance(origin, destination);

        // Return the response with the fetched data
        res.status(200).json(timeDistance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.giveAutoCompleteSuggestions = async(req,res,next)=>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        const {input} = req.query;
        const suggestions = await mapService.giveAutoCompleteSuggestions(input)
        res.status(200).json(suggestions)
    }catch(errors){
        console.error(errors)
        res.status(500).json({message: 'Internal server error'})
    }
}