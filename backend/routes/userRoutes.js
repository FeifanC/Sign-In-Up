const express = require("express");
const router = express.Router();
const {
  registerUser,
  getMe,
  loginUser,
} = require("../controllers/userController");
const {protect} = require('../middleware/authMiddleware')

router.post("/", registerUser).get("/me",protect, getMe).post("/login", loginUser);

module.exports = router;
