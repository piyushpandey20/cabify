const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => console.log("Db connected successfully"))
    .catch((error) => {
      console.log("Db connection error");
      console.log(error);
      process.exit(1);
    });
}

module.exports = connectToDB;
