const express = require("express");
const router = express.Router();

const { validate } = require("../middlewares/validate.js");
const { pizzaSchema } = require("../utils/validators.js");

const { upload, uploader } = require("../controllers/pizzaControllers.js");

router.post(
  "/upload-pizza",
  uploader.single("image"),
  validate(pizzaSchema),
  upload
);

model.exports = router;
