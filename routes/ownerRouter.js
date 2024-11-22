const express = require("express");
const router = express.Router();

const ownerModel = require("../models/owner-model");

router.get("/", (req, res) => {
  res.send("Hello from owner route");
});

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    try {
      // Check if the user already exists by email
      let owner = await ownerModel.findOne({ email: req.body.email });
      if (owner) {
        return res.status(400).send("User already exists");
      }

      // Save the new user data to the database
      const newOwner = new ownerModel(req.body);
      await newOwner.save();

      res.status(201).send("User created successfully");
    } catch (error) {
      res.status(500).send("Error creating user");
    }
  });
}

console.log(process.env.NODE_ENV);

module.exports = router;
