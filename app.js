const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth");

//Midleware
app.use(bodyParser.json());
//
//router midleware
app.use("/api/user", authRouter);
//
//
//connect db
mongoose.connect(process.env.DB_CONNECTION);
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Database ga konek"));
db.once("open", () => {
  console.log("database konek");
});

//listening port
app.listen(process.env.port, () => {
  console.log("Server jalan");
});
