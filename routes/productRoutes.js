const express = require("express");
const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 300 },
    { id: 3, name: "Tablet", price: 200 },
  ]);
});

// GET a single product by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, name: "Sample Product", price: 100 });
});

module.exports = router;
