const mongoose = require("mongoose");
const config = require("config")
const debug = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/ ` )
  .then(function () {
    console.log("conected"); 
    debug("conected");
  })
  .catch(function (err) {
    console.log("Failed to connect to the database", err);
  });

module.exports = mongoose.connection;
