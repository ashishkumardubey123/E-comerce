const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      trim: true,
    },
    email: String,
    password: String,
    cart: [{
      type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    }],
    orders: {
      type: Array,
      default: [],
    },
    contact: Number,
    picture: String,
  },
  {}
);

module.exports = mongoose.model("User", userSchema);
