const express = require("express");
const { createUser, loginUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/addUser", createUser);
router.post("/connexion", loginUser);

module.exports = router;
