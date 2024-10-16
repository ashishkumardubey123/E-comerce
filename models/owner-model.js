const mongoose = require("mongoose");



const ownerSchema = new mongoose.Schema({
  fullname: {
     type: String,
     required: true,
     unique: true,
     minlength: 5,
     maxlength: 50,
     trim: true,
  },
  email: String,
  password: String,
  
  products: {
    type: Array,
    default: [],
  },
  picture: String,
  gstin: String
});

module.exports= mongoose.model("owner","ownerSchema")
