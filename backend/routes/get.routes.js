const express = require("express");
const { getUser, createUser,} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getUser, createUser);


module.exports = router;