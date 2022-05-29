const mongoose = require("mongoose");

const ArticleScema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
    max: 25,
  },
  content: {
    type: String,
    required: true,
    max: 4096,
  },
  author: {
    type: String,
    required: true,
    min: 4,
    max: 24,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Article", ArticleScema);
