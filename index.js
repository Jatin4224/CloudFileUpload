//app create
const express = require("express");
const app = express();

//port find karna
require("dotenv").config();
const PORT = process.env.PORT || 3000;
// middleware
//ky express k pass files se intreract karne ka tarika h ?nahi so apan use karenge third party package -> express file upload middleware.
const fileUpload = require("express-fileupload");
app.use(fileUpload());

// db se connect
const db = require("./config/database");
db.connect();

//cloud se connect
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();
//api route mounting
const Upload = require("./config/FileUpload");
app.use("api/v1/upload", Upload);
// activate server
app.listen(PORT, () => {
  console.log(`App is running ar ${PORT}`);
});
