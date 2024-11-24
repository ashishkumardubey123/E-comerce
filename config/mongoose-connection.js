
require('dotenv').config(); 
const dotenv= require ('dotenv')

const mongoose = require("mongoose");
const config = require("config");
// dotenv.config({path:"..env"})
const debug = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/ecomerce `) 
  .then(function () {
    debug("connected");
  })

  .catch(function (err) {
    debug("Failed to connect to the database", err);
  });

module.exports = mongoose.connection;






