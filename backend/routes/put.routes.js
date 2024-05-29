const express = require("express");
const {  editPassword } = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.put("/user",authMiddleware ,editPassword);

module.exports = router;
