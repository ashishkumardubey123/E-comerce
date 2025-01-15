const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports = async function (req, res, next)  {
  if (!req.cookies.token) {
    req.flash("error", "abe chor pichhawada lal ho jayega tera ");
    return res.status(403).redirect("/");
  }
  try {
    let payload = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    let user = await userModel
      .findOne({ email: payload.email })
      .select("-password");

      req.user = user;
    next();
  } catch (err) {
    req.flash("error", "Kuchh to Gedbad He daya.");
    res.redirect("/");
  }
};
