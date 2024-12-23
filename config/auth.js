const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Extract the Authorization header
  if (!authHeader) {
    return res.status(403).json({ error: "Access denied. No token provided." });
  }

  // Split the Bearer prefix from the token
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(403)
      .json({ error: "Access denied. Token is malformed." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded token payload (user info) to the request
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
};

const verifyAdmin = (req, res, next) => {
  // Assuming the user role is part of the decoded JWT payload
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied. Admin only." });
  }
  next();
};

module.exports = { verifyToken, verifyAdmin };