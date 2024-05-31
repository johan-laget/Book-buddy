const express = require("express");
const { createUser, getUserById,} = require("../controllers/user.controller");
const { getBook, getBookById, getBookByFilter } = require("../controllers/book.controller");
const router = express.Router();
// const auth= require("../middleware/auth.middleware")


router.get("/user/:id", getUserById, createUser);

//Router book
router.get("/book", getBook);  //==> http://localhost:3000/get/book
router.get("/book/:id", getBookById); // ==> http://localhost:3000/get/book/{id du livre}
router.get("/bookFilter/", getBookByFilter); // ==> http://localhost:3000/get/bookFilter/?categories= {nom de la categorie}
module.exports = router;