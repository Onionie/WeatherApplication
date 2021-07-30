//jshint esversion:6

const location = require('./utils/geocode'); //import local file
const forecast = require('./utils/forecast'); //import forecast function

const address = process.argv[2];

if (!address){
  console.log("Please provide an address");
}
else{
  // Call the callback function "location" from utils.js
  location(address, (error, {latitude, longitude, location} = {})=>{ //This data includes the lat and long
    if (error){
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error){
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
