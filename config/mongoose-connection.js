const mongoose = require("mongoose");
const debug = require("debug")("development:mongoose");

mongoose
  .connect(
    "mongodb+srv://ashish9039062705:3MsAGEWAvTHmWqwm@cluster0.s2kmm.mongodb.net/"
  )
  .then(function () {
    console.log("conected"); 
    debug("conected");
  })
  .catch(function (err) {
    debug("Failed to connect to the database", err);
  });

module.exports = mongoose.connection;
