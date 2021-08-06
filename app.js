//jshint esversion:6

const geocode = require('./utils/geocode'); //import local file
const forecast = require('./utils/forecast'); //import forecast function
const express = require('express');
const ejs = require("ejs");

//To use express
const app = express();
const port = process.env.PORT || 3000;

//To use EJS
app.set('view engine', 'ejs');

//To use styling through public folder
app.use(express.static('public'));




app.get('/', (req, res) => {
  res.render('home');
});


app.get('/weather', (req, res) => {
  if(!req.query.address){
    return res.send({
      error: "You must provide an adress"
    });
  }

geocode(req.query.address, (error, {latitude, longitude, location} ={}) => {
  if(error){
    return res.send({error});
  }

  forecast(latitude, longitude, (error, forecastData) => {
  if(error){
    return res.send({error});
  }

    res.send({
      forecast: forecastData,
      location,
      address: req.query.address
    });
  });
});

});

// app.post('/', (req, res) => {
//   res.redirect('/');
// });



app.listen(port, () =>{
  console.log("Listening on Port 3000");
});



// const address = process.argv[2];
//
// if (!address){
//   console.log("Please provide an address");
// }
// else{
//   // Call the callback function "location" from utils.js
//   location(address, (error, {latitude, longitude, location} = {})=>{ //This data includes the lat and long
//     if (error){
//       return console.log(error);
//     }
//     forecast(latitude, longitude, (error, forecastData) => {
//       if (error){
//         return console.log(error);
//       }
//       console.log(location);
//       console.log(forecastData);
//     });
//   });
// }
