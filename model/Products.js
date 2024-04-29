const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String, // Link to product image
});

module.exports = mongoose.model('Product', productSchema);
