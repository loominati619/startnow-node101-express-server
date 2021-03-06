// import files and packages up here
var express = require("express");
var morgan = require("morgan");
var topSpots = require("./data.json");

// create your express server below
var app = express();

// add your routes and middleware below

app.use(morgan("dev"));

app.get('/', function(req, res){
   res.send("");
});
app.get("/data", function(req,res){
   res.send(topSpots);
});
// finally export the express application
module.exports = app;
