const express = require("express");
const models = require("../models");
const router = express.Router();
const { Item } = require("../models");


router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});




module.exports = router;

module.exports = router;
