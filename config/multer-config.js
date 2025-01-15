const multer = require("multer")


// Configure multer with memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });




module.exports = upload;