const express = require("express");
const router = express.Router();

const { validate } = require("../middlewares/validate.js");
const { orderSchema } = require("../utils/validators.js");
const { createOrder } = require("../controllers/orderController.js");

router.post("/create-order", validate(orderSchema), createOrder);

module.exports = router;
