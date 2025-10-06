const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "GET all products" });
});

router.get("/:id", (req, res) => {
  res.json({ message: `GET product with ID: ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.json({ message: "POST a new product" });
});

router.put("/:id", (req, res) => {
  res.json({ message: `PUT update product with ID: ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `DELETE product with ID: ${req.params.id}` });
});

module.exports = router;
