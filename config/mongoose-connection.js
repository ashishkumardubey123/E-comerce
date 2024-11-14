// process.env.DEBUG = 'development:mongoose';
require('dotenv').config();

const mongoose = require("mongoose");
const config = require("config");
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






