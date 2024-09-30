const express = require("express");
const router = express.Router();

const { validate } = require("../middlewares/validate.js");
const { roleSchema } = require("../utils/validators.js");
const {
  createRole,
  getRole,
  deleteRole,
} = require("../controllers/roleControllers.js");

router.post("/create-role", validate(roleSchema), createRole);
router.get("/get-roles", getRole);
router.delete("/delete/:id", deleteRole);


module.exports = router;
