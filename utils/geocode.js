require('dotenv').config(); // for my api
const request = require('request');
const geoApiKey = process.env.geoAPI; //Hidden API key access

// Callback function
const location = (address, callback) => {
 const Url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=" + geoApiKey;


  //json:true parses the JSON.parse(response.body) to object
  request( {url: Url, json: true}, (error, response) => {
    if(error){
      callback("Unable to connect", undefined);
    }
    else if(response.body.features.length === 0){
      callback("Unable to find location. Try another search.", undefined);
    }
    else{
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
      }
    });
  }

//To export a function
module.exports = location;
