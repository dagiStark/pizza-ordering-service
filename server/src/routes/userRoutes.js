const express = require("express");
const router = express.Router();

const { validate } = require("../middlewares/validate.js");
const { userSchema } = require("../utils/validators.js");
const { getUser, deleteUser } = require("../controllers/userController.js");

router.get("/get-users", getUser);
router.delete("/delete/:id", deleteUser);
router.post("/add", addUser);

module.exports = router;
