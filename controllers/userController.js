const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const getUsers = await User.find();
    if (!getUsers) {
      return res.status(400).json({ error: "No data" });
    }
    return res.status(200).json(getUsers);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getUsers,
};
