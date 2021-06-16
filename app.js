//jshint esversion:6

require('dotenv').config(); // for my api
const request = require('request'); //to make http calls
const location = require('./utils/geocode'); //import local file
const forecast = require('./utils/forecast'); //import forecast function
const apiKey = process.env.API_KEY; //Hidden API key access


// const url = "http://api.weatherstack.com/current?access_key=" + apiKey + "&query=37.8267,-122.4233&units=f";
//
// request({url: url, json: true}, function(error, response){
//   const data = response.body;
//   if(error){ // low level error
//     console.log("Unable to connect to the Weather API");
//   }
//   else if(response.body.error){ // error in the data
//     console.log("Unable to find location");
//   }
//   else{
//     console.log("It is currently " + data.main.temp + " degrees out. And currently " + data.weather[0].description );
//   }
//
// });



// // Call the callback function "location" from utils.js
// location("Boston", (error,data)=>{
//   console.log("Error", error);
//   console.log("Data", data);
// });



forecast(44.1545, -75.7088, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
