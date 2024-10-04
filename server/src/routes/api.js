const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const orderRoutes = require("./orderRoutes");
const pizzaRoutes = require("./pizzaRoutes");
const roleRoutes = require("./roleRoutes");
const userRoutes = require("./userRoutes");

router.use("/auth", authRoutes);
router.use("/order", orderRoutes);
router.use("/pizza", pizzaRoutes);
router.use("/role", roleRoutes);
router.use("/user", userRoutes);


module.exports = router;
