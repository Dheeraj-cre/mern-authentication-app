const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getMe,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

// Test route
router.get("/test", (req, res) => {
  res.json({ message: "Auth route working ✅" });
});

// Auth routes
router.post("/register", register);
router.post("/login", login);

// Protected route
router.get("/me", protect, getMe);

module.exports = router;
