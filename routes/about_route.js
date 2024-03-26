const express = require("express");
const router = express.Router();
const Dev = require("../models/devs_model.js");

router.get("/", async (req, res) => {
  try {
    //collection.Find(criteria).SetFields(Fields.Include("oneField", "anotherField").Exclude("_id"))
    const devs = await Dev.find({}, {'_id': false});
    console.log(devs)
    res.status(200).json(devs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
