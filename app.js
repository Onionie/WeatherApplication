//jshint esversion:6

require('dotenv').config(); // for my api
const request = require('request');

const apiKey = process.env.API_KEY; //Hidden API key access
const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=" + apiKey + "&units=metric";



request({url: url, json: true}, function(error, response){
  const data = response.body;
  if(error){ // low level error
    console.log("Unable to connect to the Weather API");
  }
  else if(response.body.error){ // error in the data
    console.log("Unable to find location");
  }
  else{
    console.log("It is currently " + data.main.temp + " degrees out. And currently " + data.weather[0].description );
  }


});
