const express = require("express");
const router = express.Router();
const registSchema = require("../models/Schema.js");

//POST REGISTRASI
router.post("/", async (req, res) => {
  const registPost = new registSchema({
    nama: req.body.nama,
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const saveRegist = await registPost.save();
    res.json(saveRegist);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET
router.get("/:_id", async (req, res) => {
  try {
    const regist = await registSchema.find({ _id: req.params.id });
    res.json(regist);
  } catch (error) {
    res.json({ message: error });
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const registUpdate = await registSchema.updateOne(
      { id: req.params.id },
      {
        nama: req.body.nama,
        username: req.body.username,
      }
    );
    res.json(registUpdate);
  } catch (error) {
    res.json({ message: error });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const regist = await registSchema.remove({ id: req.params.id });
    res.json(regist);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
