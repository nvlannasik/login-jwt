const router = require("express").Router();
const Product = require("../models/Product");

//POST product
router.post("/product", async (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
  });
  const result = {
    message: "Product created successfully",
    data: {
      product,
    },
  };
  try {
    const productSaved = product.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

//GET ALL
router.get("/product", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET product ID
router.get("/product/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).send("The product with the given ID was not found.");
  } else {
    res.status(200).send(product);
  }
});

module.exports = router;
