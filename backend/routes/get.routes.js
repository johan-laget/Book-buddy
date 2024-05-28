const express = require("express");
const { createUser, getUserById,} = require("../controllers/user.controller");
const router = express.Router();

router.get("/user/:id", getUserById, createUser);


module.exports = router;