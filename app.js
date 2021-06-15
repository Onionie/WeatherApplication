//jshint esversion:6

require('dotenv').config(); // for my api
const request = require('request'); //to make http calls

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

// const location = (address, callback) => {
//
//
//   //json:true parses the JSON.pars(response.body) to object
//   request( {url: url, json: true}, (error, response) => {
//     if(error){
//       callback("Unable to connect", undefined);
//     }else if(response.body.features.length === 0){
//       callback("Unable to find location. Try another search.", undefined);
//     }
//
//   });
// }
//
// location("asdasd", (error,data)=>{
//   console.log("Error", error);
//   console.log("Data", data);
// });

//Geocode API
// Request for geocoding to get our latitude and longitude
const geoCodingUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoib25pb25pZSIsImEiOiJja3B5amRldTkwMHZlMzFtcGw4NmVxN3Z0In0.UjVn1bfDC8FkP2JQToTr_Q";
  request({url: geoCodingUrl, json: true}, (error, response)=>{
  if(error){
    console.log("Network Problem");
  }
  else if(response.body.features.length === 0){
    console.log("No Matching Result.");
  }
  else{
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
