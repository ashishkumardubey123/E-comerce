const express = require("express");
const router = express.Router();

const ownerModel = require("../models/owner-model");



// if env have some change you need to re satrt the server

if (process.env.NODE_ENV == "development") {
  router.post("/create", async (req, res) => {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
      return res.status(500).send("owner already register ");
      console.log(owner);
    }
    let { fullname, email, password } = req.body;

    let creaetdOwner = await ownerModel.create({
      fullname:fullname,
      email: email,
      password: password
    });

    res.send(creaetdOwner);
  });
}

router.get("/admin", (req, res) => {
  let success= req.flash("success");
  res.render("createproducts" ,{success});
});


module.exports = router;
