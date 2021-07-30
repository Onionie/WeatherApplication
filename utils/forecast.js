require('dotenv').config(); // for my api
const request = require('request');
const apiKey = process.env.API_KEY; //Hidden API key access

  const forecast = (latitude, longitude, callback) => {
    const forecastURL = "http://api.weatherstack.com/current?access_key=" + apiKey + "&query=" + latitude+ "," + longitude + "&units=f";

    request({url: forecastURL, json: true}, (error, {body}) => {
      //Check for errors
      if (error){
        console.log("Connection Error");
      }
      else if (body.error){
        console.log("Location Error")
      }
      else{
        callback(undefined, "It is currently " + body.current.temperature + " The Humidity is: " + body.current.humidity);
        }
      });//End of callback


  }//End of Forecast function line


//To export a function
module.exports = forecast;
