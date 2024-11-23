const express = require("express");
const router = express.Router();

const ownerModel = require("../models/owner-model");

router.get("/", (req, res) => {
  res.send("Hello from owner route");
  console.log(process.env.NODE_ENV)
});

// if (process.env.NODE_ENV) {
  router.get("/create", async (req, res) => {
      
      res.send("han me creaeter hun ")
  
  });
// }

console.log(process.env.NODE_ENV);

module.exports = router;
