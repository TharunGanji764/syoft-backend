const jwtToken = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  let token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    return res.status(400).json({ error: "JWT Token Not Found" });
  }
  try {
    jwtToken.verify(token, "jwt", (error, payload) => {
      if (error) {
        return res.status(401).json({ error: "Invalid JWT Token" });
      }
      req.username = payload.username;
      req.role = payload.role;
      next();
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = authenticate;
