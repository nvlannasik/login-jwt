const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
    max: 25,
  },
  price: {
    type: String,
    required: true,
    max: 4096,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
