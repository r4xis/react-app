const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Product = require("../models").product;

router.get("/", auth, (req, res) => {
  Product.findAll({ where: { owner: req.user.id } }).then((products) =>
    res.json(products)
  );
});

router.post("/", auth, (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    current_price: req.body.current_price,
    previous_price: req.body.previous_price,
    unit: req.body.unit,
    owner: req.user.id,
  });

  newProduct.save().then((product) => res.json(product));
});

module.exports = router;
