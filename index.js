const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./src/config/Db");
const userRoutes = require("./src/Route/AuthRoutes/userRoutes");
const postRoutes = require("./src/Route/postRoutes/postRoutes");

dotenv.config();
const port = 3002;
const app = express();
connectDB();

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);

app.listen(3002, (error) => {
  if (error) {
    console.log("something is wrong");
  }

  console.log(`server is running on port ${port}`);
});
