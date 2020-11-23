const express = require("express");
const router = express.Router();

const User = require("../models").user;
const Product = require("../models").product;

router.get("/", (req, res) => {
  Product.findAll().then((products) => res.json(products));
});

router.get("/users", (req, res) => {
  User.findAll().then((users) => res.json(users));
});

module.exports = router;
