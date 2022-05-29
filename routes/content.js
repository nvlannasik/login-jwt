const router = require("express").Router();
const Product = require("../models/Product");
const Article = require("../models/Article");
require("dotenv").config();

//GET ALL
router.get("/article", async (req, res) => {
  const content = await Content.find();
  res.send(content);
});

//POST article
router.post("/article", async (req, res) => {
  const content = new Article({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    imageUrl: req.body.imageUrl,
  });
  try {
    const contentSaved = content.save();
    res.send(content);
  } catch (err) {
    res.status(400).send(err);
  }
});

//post product

router.post("/product", async (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
  });
  try {
    const savedProduct = product.save();
    res.send(product);
  } catch (err) {
    res.status(400).send(err);
  }
});

//get article
router.get("/article/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article)
    return res.status(404).send("The article with the given ID was not found.");
  res.send(article);
});

module.exports = router;
