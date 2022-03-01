const { JWT_SECRET } = require("../utils");
const jwt = require("jsonwebtoken");

module.exports = async function(req, res, next) {
  const token = req.header("x-auth-token");
  if(!token) {
      return res.status(401).json({ success: false, message: "No token, authorization denied" });
  }

  try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded.user;
      next();
  } catch (err) {
      res.status(401).json({ success: false, message: "Token is invalid"});
  }
};