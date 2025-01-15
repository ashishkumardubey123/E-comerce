const express = require("express");
const isLogedIn = require("../middlewares/isLogedIn");
const productModel = require("../models/product-model");
const { logout } = require("../controllers/authController");
const userModel = require("../models/user-model");
const router = express.Router();

router.get("/", (req, res) => {
  let error = req.flash("error");
  res.render("index", { error, loggedin: false });
});

router.get("/addtocart/:productId", isLogedIn, async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    if (!user.cart) {
      user.cart = [];
    }
    user.cart.push(req.params.productId);
    await user.save();
    req.flash("success", "Product added to cart");
    
     res.redirect("/shop" );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/shop", isLogedIn, async (req, res) => {
  let products = await productModel.find();

  let success= req.flash("success");
  res.render("shop", { products, success });
}); 


router.get("/cart", isLogedIn, async (req, res) => {
  let products = await productModel.find();
  let user = await userModel.findOne({ email: req.user.email }).populate("cart"); 
  
    // Calculate the total bill for the products in the user's cart
    let bill = user.cart.reduce((acc, product) => {
      // Find the product in the products array that matches the current product in the cart
      let p = products.find((p) => p._id.toString() === product._id.toString());
      // Add the price of the found product to the accumulator
      acc += p.price;
    return acc;
  }, 0);

  res.render("cart", { user, bill });
});


 
module.exports = router;
