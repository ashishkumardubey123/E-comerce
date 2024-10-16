const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const path= require('path')
const db = require("./config/mongoose-connection")
const ownerRouter = require("./routes/ownerRouter")
const usersRouter = require("./routes/usersRouter")
const productRouter = require("./routes/productRouter")

const port =  3000;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static('public'));
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');


// Routes
app.use('/owner', ownerRouter)
app.use('/user', usersRouter)
app.use('/product', productRouter)

// Start the server
app.listen(port, () => {
  // console.log(`Server is running on port ${port}`);
});