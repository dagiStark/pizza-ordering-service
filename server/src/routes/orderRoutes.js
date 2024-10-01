const express = require("express");
const router = express.Router();

const { validate } = require("../middlewares/validate.js");
const { orderSchema } = require("../utils/validators.js");
const { createOrder, getOrder, updateOrder } = require("../controllers/orderController.js");

router.post("/create-order", validate(orderSchema), createOrder);
router.get("/get-order",  getOrder);
router.patch("/update-order/:id",  updateOrder);

module.exports = router;
