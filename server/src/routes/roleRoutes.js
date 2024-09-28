const express = require("express");
const router = express.Router();

const { validate } = require("../middlewares/validate.js");
const { roleSchema } = require("../utils/validators.js");

router.post("/upload", validate(roleSchema), upload);


module.exports = router;
