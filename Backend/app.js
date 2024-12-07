const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDB = require("./db/db");
const userRoutes = require("./routes/user.routes");
const cabDriverRoutes = require("./routes/cabDriver.routes");
const mapsRoutes = require('./routes/maps.routes');
const cookieParser = require("cookie-parser");

connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);
app.use("/cabDrivers", cabDriverRoutes);
app.use('/maps', mapsRoutes);

module.exports = app;
