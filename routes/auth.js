const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const { registerValidation } = require("../validation");

//POST REGISTER
router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if user already exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");
  //Hash password
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

  //create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = router;
