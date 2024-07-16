const jwtToken = require("jsonwebtoken");
const User = require("../models/User");

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const exist = await User.findOne({ username });
    if (exist) {
      return res.status(400).json({ error: "User already exist" });
    }
    let newUser = new User({
      username,
      email,
      password,
      role,
    });
    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ error: "Invalid User" });
    }
    if (password !== userExist.password) {
      return res.status(400).json({ error: "invalid Password" });
    }
    const payload = {
      username: userExist.username,
      role: userExist.role,
    };
    let jwt = jwtToken.sign(payload, "jwt");
    console.log(jwt);
    return res.status(200).json({ jwt });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  register,
  login,
};
