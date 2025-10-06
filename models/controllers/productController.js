const products = require("../models/productModel");

// GET all products
exports.getAllProducts = (req, res) => {
  res.json(products);
};

// GET a single product by ID
exports.getProductById = (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

// POST create a new product
exports.createProduct = (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

// PUT update a product
exports.updateProduct = (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });

  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;
  product.category = req.body.category || product.category;

  res.json(product);
};

// DELETE a product
exports.deleteProduct = (req, res) => {
  const index = products.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Product not found" });

  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
};
