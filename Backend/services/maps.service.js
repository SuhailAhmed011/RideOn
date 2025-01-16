const axios = require("axios");

module.exports.getAddressCordinates = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error(`Unable to fetch coordinates: ${response.data.status}`);
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error.message);
    throw error;
  }
};

module.exports.getTimeDistance = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required!");
  }

  const apiKey = process.env.GOOGLE_MAPS_API; // Ensure this variable is set
  if (!apiKey) {
    throw new Error(
      "API key is missing. Ensure GOOGLE_MAPS_API is set in the environment."
    );
  }

  // Construct the URL for the distance matrix API
  const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    // Send a GET request to the API
    const response = await axios.get(url);

    // Check if the API response status is OK
    if (response.data.status === "OK") {
      const rows = response.data.rows?.[0]?.elements?.[0];
      if (!rows) {
        throw new Error(
          "Unexpected API response format: rows or elements are missing."
        );
      }

      if (rows.status === "ZERO_RESULTS") {
        throw new Error(
          "No routes found for the given origin and destination."
        );
      }

      // Return the formatted data
      return response.data.rows[0].elements[0];

      // distance: rows.distance.text, //  human-readable format
      // duration: rows.duration.text, // human-readable format
      // origin: response.data.origin_addresses?.[0] || "Unknown Origin",
      // destination: response.data.destination_addresses?.[0] || "Unknown Destination",
    } else {
      throw new Error(`API Error: ${response.data.status}`);
    }
  } catch (error) {
    console.error("Error in getTimeDistance:", error.message);
    throw error; // Re-throw the error for the caller to handle
  }
};

module.exports.giveAutoCompleteSuggestions = async(input)=>{
    if(!input){
        throw new Error('Input are required!!')
    }
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    try {
        const response = await axios.get(url)
         if(response.data.status === 'OK'){
            return response.data.predictions.map(prediction => prediction.description).filter(value => value)
         }else{
            throw new Error('Unable to fetch suggestions')
         }
    } catch (error) {
        console.error(error)
        throw error
    }
}