const express = require("express");
const {
  signup,
  login,
  logout,
  register,
} = require("../controllers/authControllers.js");
const { validate } = require("../middlewares/validate");
const { registerSchema, restaurantSchema } = require("../utils/validators");

const router = express.Router();

router.post("/register", validate(restaurantSchema), register);
router.post("/sign-up", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
