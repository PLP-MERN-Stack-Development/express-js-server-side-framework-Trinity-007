// controllers/productController.js
let products = require("../models/productModel");

// GET all products
exports.getAllProducts = (req, res) => {
  res.json(products);
};

// GET a single product by ID
exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

// POST - Create new product
exports.createProduct = (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

// PUT - Update product
exports.updateProduct = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, price, category } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;
  if (category) product.category = category;

  res.json(product);
};

// DELETE - Remove product
exports.deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);
  res.json({ message: "Product deleted successfully" });
};
