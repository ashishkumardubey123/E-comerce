const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
// const  jwt = require("jsonwebtoken")
const { generateToken } = require("../utils/genetateToken");
const product = require("../models/product-model");
const productModel = require("../models/product-model");

module.exports.registerUser = async (req, res) => {
  try {
    let { email, fullname, password } = req.body;

    let existingUser = await userModel.findOne({ email });

    if (existingUser) return res.send("bhag sale login kar chup chap ")


      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) return console.log(err.message);
          else {
            let user = await userModel.create({
              email,
              fullname,
              password: hash,
            });
            let token = generateToken(user);

            res.cookie("token", token);
            res.send("user created ");
          }
        });
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports.loginUser = async (req, res) => {

  let { email, password } = req.body;

   let user = await userModel.findOne({ email });

   if (!user) return res.status(400).send(" nikal chutiye pahale hi fursat me nikal");
    
   await bcrypt.compare(password, user.password, async function(err , result){
    
    if (result){
         
            let token =  generateToken(user);
             
            res.cookie("token", token);
           
            // Redirect to the shop route after successful login
            res.redirect("/shop"); 
          }
          else {
            res.status(400).send(" password to sahi dal bhadwe");
          }
   } )
  
}

 module.exports.logout = (req, res) => {
  res.clearCookie("token");
   res.redirect("/");
 }