const express = require("express");
const { createUser, getUserById,} = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.get("/user/:id", authMiddleware, getUserById, createUser);


module.exports = router;