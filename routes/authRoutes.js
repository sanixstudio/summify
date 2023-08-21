const express = require("express");
const {
  registerControllers,
  loginControllers,
  logoutControllers,
} = require("../controllers/authController");

// Express Router
const router = express.Router();

// Routes
// REGISTER
router.post("/register", registerControllers);

// LOGIN
router.post("/login", loginControllers);

// LOGOUT
router.post("/logout", logoutControllers);

module.exports = router;
