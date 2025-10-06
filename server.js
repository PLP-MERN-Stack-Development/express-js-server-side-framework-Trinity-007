const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");

app.use(express.json());

// Mount routes
app.use("/api/products", productRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js API!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
