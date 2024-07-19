const File = require("../models/File");

//local file upload -> client k path se media fetch karke server k path par upload kardeta h .

exports.localFileUpload = async (req, res) => {
  try {
    //fetch file
    const file = req.files.file;
    console.log("file aagyi h ->", file);

    let path = __dirname + "/files/" + Date.now();
    console.log("path->", path);

    file.mv(path, (err) => {
      console.log(err);
    });

    res.json({
      success: true,
      message: "Local File uploaded Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
