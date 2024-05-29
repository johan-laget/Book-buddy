const express = require("express");
const {  editPassword } = require("../controllers/user.controller");
const router = express.Router();

router.put("/user/:id", editPassword);

module.exports = router;
