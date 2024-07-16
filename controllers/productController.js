const Product = require("../models/Product");
const User = require("../models/User");

const addProduct = async (req, res) => {
  try {
    const { username, role } = req;
    const { title, description, inventryCount } = req.body;
    const userExist = await User.findOne({ username });
    if (!userExist) {
      return res.status(400).json({ error: "Invalid User" });
    }

    if (role !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }
    let newProduct = new Product({
      title,
      description,
      inventryCount,
    });
    await newProduct.save();
    return res.status(201).json({ message: "product Added successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProducts = async (req, res) => {
  try {
    const { role } = req;
    if (role === "staff") {
      return res.status(403).json({ message: "Unauthorized" });
    }
    const data = await Product.find();
    if (!data) {
      return res.status(400).json({ error: "No data" });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { role } = req;
    const { id } = req.params;
    const { title, description, inventryCount } = req.body;
    if (role === "staff") {
      return res.status(403).json({ message: "Unauthorized" });
    }
    const getProduct = await Product.findById(id);
    if (getProduct) {
      getProduct.title = title || getProduct.title;
      getProduct.description = description || getProduct.description;
      getProduct.inventryCount = inventryCount || getProduct.inventryCount;
      const updateProduct = await getProduct.save();
      res.json(updateProduct);
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req;
    const findProduct = await Product.findById(id);
    if (role !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }
    if (!findProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    await findProduct.deleteOne();
    return res.json({ message: "Product Removed" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
