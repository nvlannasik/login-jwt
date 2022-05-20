const mongoose = require("mongoose");

const MemberSchema = mongoose.Schema({
  nama: {
    type: String,
    require: true,
  },
});
