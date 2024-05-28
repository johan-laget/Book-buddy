const express = require("express");
const {  editUser } = require("../controllers/user.controller");
const router = express.Router();

router.put("/user/:id", editUser);

module.exports = router;
