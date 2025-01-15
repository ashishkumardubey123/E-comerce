const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  discount: {
    type: Number,
    default: 20,
  },
  bgcolor: String,
  panelcolor: String,
  textcolor: String,

  price: Number,
  image: Buffer,


});




module.exports = mongoose.model("Product", productSchema);
