const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// POST /items
router.post("/", async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    res.send(item);
  } catch (error) {
    next(error);
  }
});

// DELETE /items/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const success = await Item.destroy({
      where: {
        id: req.params.id
      }
    });
    if(success) {
      res.send('successfully deleted item' + req.params.id);
    } else {
      next({message: 'error deleting item ' + req.params.id});
    }
  } catch (error) {
    next(error);
  }
});

// PUT /items/:id
router.put("/:id", async (req, res, next) => {
  try {
    const [_, success] = await Item.update(
      req.body
      ,
      {
        where: {
          id: req.params.id,
        },
        returning: true
      }
    );
    
    if(success) {
      res.send('successfully edited item' + req.params.id);
    } else {
      next({message: 'error editing item ' + req.params.id});
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;