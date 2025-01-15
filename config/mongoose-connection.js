
require('dotenv').config(); 
const dotenv= require ('dotenv')

const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("development:mongoose");

mongoose
  .connect(`${(process.env.MONGODB_URI)}/ecomerce `) 
  .then(function () {
    debug("connected");
  })

  .catch(function (err) {
    debug("Failed to connect to the database", err);
  });

module.exports = mongoose.connection;






