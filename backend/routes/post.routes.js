const express = require("express");
const { setUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/addUser", setUser);


module.exports = router;
