const router = require("express").Router();
const User = require("../models/User.js");

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password,
  });
  try {
    const savedUser = user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
