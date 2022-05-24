const mongoose = require("mongoose");

const registSchema = mongoose.Schema({
  nama: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    min: 8,
    max: 1024,
  },
  dateRegist: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("regist", registSchema);
