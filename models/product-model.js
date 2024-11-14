const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  discount: {
    type: Number,
    default: 0,
  },
  bgcolor: String,
  panecolor: String,
  textcolor: String,

  price: Number,
  image: String,
});

module.exports = mongoose.model("Product", productSchema);
