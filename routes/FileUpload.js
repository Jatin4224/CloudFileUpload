//express instance
const express = require("express");
const router = express.Router();

//handelr functions
const { localFileUpload } = require("../controllers/FileUpload");

//Api Route requests
router.post("/localFileUpload", localFileUpload);

//export
module.exports = router;
