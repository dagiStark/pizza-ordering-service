const express = require("express");
const router = express.Router();

const { validate } = require("../middlewares/validate.js");
const { roleSchema } = require("../utils/validators.js");
const { createRole } = require("../controllers/roleControllers.js");

router.post("/create-role", validate(roleSchema), createRole);


module.exports = router;
