const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  inventryCount: { type: Number, required: true },
});

module.exports = mongoose.model("Product", Product);
