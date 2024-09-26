const express = require("express");
const {
  signup,
  login,
  logout,
  register,
} = require("../controllers/authControllers.js");
const { validate } = require("../middlewares/validate.js");
const { restaurantSchema, userSchema } = require("../utils/validators.js");

const router = express.Router();

router.post("/register", validate(restaurantSchema), register);
router.post("/sign-up", validate(userSchema), signup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
