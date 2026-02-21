const jwt = require("jsonwebtoken");

// 🔐 Verify Token
exports.auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided"
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Invalid token format"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // Attach user info to request

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token invalid or expired"
    });
  }
};
// 🎭 Role-Based Authorization
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Access denied for role: ${req.user.role}`
      });
    }

    next();
  };
};
// 🎭 Theatre Ownership Check
exports.checkTheatreOwnership = (req, res, next) => {
  if (req.user.role === "theatreManager") {
    if (!req.user.theatre) {
      return res.status(403).json({
        message: "No theatre assigned"
      });
    }
  }
  next();
};