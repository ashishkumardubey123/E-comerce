const express = require("express");
const router = express.Router();
const productModel = require("../models/product-model");
const upload = require("../config/multer-config");

router.post("/create", upload.single("image"), async (req, res) => {
    try{  let { name, discount, bgcolor, panelcolor, textcolor, price } = req.body;

  let product = await productModel.create({
    image: req.file.buffer,
    name,
    price,
    discount,
    bgcolor,
    panelcolor,
    textcolor,
  });
  req.flash("success", "Product Created Successfully");
  res.redirect("/owner/admin");}
     catch(err){
   res.status(500).send(err.message);
     } 
});

module.exports = router;
 