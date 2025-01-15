require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connection");
const ownerRouter = require("./routes/ownerRouter");
const usersRouter = require("./routes/usersRouter");
const productRouter = require("./routes/productRouter");
const index = require("./routes/index");
const flash = require("connect-flash")
const expressSession = require('express-session');

const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: false }, // Set secure to true for production environment
  })
)

// Serve static files from the "public" directory
app.use(flash())
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
app.use("/owner", ownerRouter);
app.use("/user", usersRouter);
app.use("/product", productRouter);
app.use("/", index);



// Route for a simple dashboard (for successful login redirects)
app.get("/dashboard", (req, res) => {
  res.send("<h1>Welcome to the Dashboard!</h1>");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
