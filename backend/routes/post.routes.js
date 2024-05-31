const express = require("express");
const { createUser, loginUser } = require("../controllers/user.controller");
const { addBook, editPages } = require("../controllers/book.controller");
const router = express.Router();
const auth= require ("../middleware/auth.middleware")


//Routes users
router.post("/addUser", createUser);
router.post("/connexion", loginUser);

//Routes book
router.post("/addBook", auth, addBook)


module.exports = router;
