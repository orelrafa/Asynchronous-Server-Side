const express = require("express");
const router = express.Router();
const Dev = require("../models/devs_model.js");

router.get("/", async (req, res) => {
  try {
    const devs = await Dev.find({}, { _id: false });
    res.status(200).json(devs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
