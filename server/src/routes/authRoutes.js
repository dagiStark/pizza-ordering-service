import express from "express";
import {
  signup,
  login,
  logout,
  register,
} from "../controllers/authControllers.js";
const { validate } = require("../middlewares/validate");
const { registerSchema } = require("../utils/validators");

const router = express.Router();

router.post("/register", validate(registerSchema), register);
router.post("/sign-up", signup);
router.post("/login", login);
router.post("/logout", logout);


export default router;
