const express = require("express");
const router = express.Router();

const ownerModel = require("../models/owner-model");

router.get("/", (req, res) => {
  res.send("Hello from owner route");
});

// if env have some change you need to re satrt the server

if (process.env.NODE_ENV == "development") {
  router.post("/create", async (req, res) => {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
      return res.status(500).send("owner already register " );
      console.log(owner)
       
    }
  let { fullname, email,password}= req.body

  let creaetdOwner= await ownerModel.create({
      fullname,
      email,
      password,
    });

    res.send(creaetdOwner);
  });
}

console.log(process.env.NODE_ENV);

module.exports = router;
