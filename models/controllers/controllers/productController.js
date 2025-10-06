const products = require("../models/productModel");

// Get all products
const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

// Get single product by ID
const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
};

module.exports = { getAllProducts, getProductById };
