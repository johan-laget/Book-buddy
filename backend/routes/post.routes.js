const express = require("express");
const { createUser, loginUser } = require("../controllers/user.controller");
const { addBook, editPages } = require("../controllers/book.controller");
const router = express.Router();
const authMiddleware= require ("../middleware/auth.middleware")


//Routes users
router.post("/addUser", createUser);
router.post("/connexion", loginUser);

//Routes book
router.post("/addBook", authMiddleware, addBook)


module.exports = router;
