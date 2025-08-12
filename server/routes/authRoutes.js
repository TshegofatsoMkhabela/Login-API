const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

// Middlewares

// Allow requests only from this origin (frontend URL)
const allowedOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";

router.use(
  cors({
    credentials: true,
    origin: allowedOrigin,
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);

module.exports = router;
