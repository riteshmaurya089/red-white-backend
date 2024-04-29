const Product = require('../model/Products');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { title, price, description, category, image } = req.body;
    
    // Create a new Product instance
    const newProduct = new Product({
      title,
      price,
      description,
      category,
      image
    });

    // Save the new product to the database
    await newProduct.save();

    // Respond with the created product
    res.status(201).json(newProduct);
  } catch (error) {
    // If an error occurs, respond with a 500 Internal Server Error
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get products by category
exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
