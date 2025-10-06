const express = require("express");
const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  res.json({ message: "GET all products" });
});

// GET a single product by ID
router.get("/:id", (req, res) => {
  res.json({ message: `GET product with ID: ${req.params.id}` });
});

// POST a new product
router.post("/", (req, res) => {
  res.json({ message: "POST a new product" });
});

// PUT update a product
router.put("/:id", (req, res) => {
  res.json({ message: `PUT update product with ID: ${req.params.id}` });
});

// DELETE a product
router.delete("/:id", (req, res) => {
  res.json({ message: `DELETE product with ID: ${req.params.id}` });
});

module.exports = router;
