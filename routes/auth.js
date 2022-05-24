const router = require("express").Router();
const User = require("../models/User.js");
const { registerValidation } = require("../validation");

//POST REGISTER
router.post("/register", (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if user already exists
  const emailExist = User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

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
    res.status(400).send(err);
  }
});
module.exports = router;
