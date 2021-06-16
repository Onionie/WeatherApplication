//jshint esversion:6

require('dotenv').config(); // for my api
const request = require('request'); //to make http calls
const location = require('./utils/geocode'); //import local file
const forecast = require('./utils/forecast'); //import forecast function
const apiKey = process.env.API_KEY; //Hidden API key access

// Call the callback function "location" from utils.js
location("Boston", (error,data)=>{
  console.log("Error", error);
  console.log("Data", data);
});



forecast(44.1545, -75.7088, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
