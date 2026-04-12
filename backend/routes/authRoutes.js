const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

// ✅ register route
router.post("/register", authController.register);

// ✅ login route
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
module.exports = router;
