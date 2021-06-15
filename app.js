//jshint esversion:6

require('dotenv').config(); // for my api
const request = require('request'); //to make http calls

const apiKey = process.env.API_KEY; //Hidden API key access




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

const location = (address, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=" + apiKey + "&query=37.8267,-122.4233&units=f";

  //json:true parses the JSON.pars(response.body) to object
  request( {url: url, json: true}, (error, response) => {
    if(error){
      callback("Unable to connect", undefined);
    }else if(response.body.features.length === 0){
      callback("Unable to find location. Try another search.", undefined);
    }

  });
}

location("asdasd", (error,data)=>{
  console.log("Error", error);
  console.log("Data", data);
});
