const express = require("express");
const { setUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/", setUser);


module.exports = router;
