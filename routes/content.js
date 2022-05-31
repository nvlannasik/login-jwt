const router = require("express").Router();
const Article = require("../models/Article");
require("dotenv").config();

//POST article
router.post("/article", async (req, res) => {
  const content = new Article({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    imageUrl: req.body.imageUrl,
  });
  const result = {
    message: "Article created successfully",
    data: {
      title: content.title,
      content: content.content,
      author: content.author,
      imageUrl: content.imageUrl,
    },
  };
  try {
    const contentSaved = content.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

//GET ALL
router.get("/article", async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

//GET ARTICLE ID
router.get("/article/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) {
    return res.status(404).send("The article with the given ID was not found.");
  } else {
    res.status(200).send(article);
  }
});

module.exports = router;
