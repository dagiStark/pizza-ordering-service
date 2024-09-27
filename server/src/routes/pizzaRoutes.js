const express = require("express");
const router = express.Router();

const { validate } = require("../middlewares/validate.js");
const { pizzaSchema } = require("../utils/validators.js");


router.post("/upload", validate(pizzaSchema), upload);

model.exports = router;
