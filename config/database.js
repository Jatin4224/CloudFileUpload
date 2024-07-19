//mongoose import
const mongoose = require("mongoose");

//url config m h so
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB CONNECTION SUCCESS HOGYA"))
    .catch((error) => {
      console.log("DB connection issues");
      console.error(error);
      process.exit(1);
    });
};
