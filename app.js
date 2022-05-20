const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const routerMember = require("./routes/router");

app.get("/", routerMember);

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
