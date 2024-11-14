// process.env.DEBUG = 'development:mongoose';
require('dotenv').config();

const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("development:mongoose");

mongoose
  .connect('mongodb+srv://ashish9039062705:3MsAGEWAvTHmWqwm@cluster0.s2kmm.mongodb.net/comerce' ) 
  .then(function () {
    debug("connected");
  })

  .catch(function (err) {
    console.log("Failed to connect to the database", err);
  });

module.exports = mongoose.connection;






