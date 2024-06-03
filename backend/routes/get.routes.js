const express = require("express");
const { getUserById,} = require("../controllers/user.controller");
const { getBook, getBookById, getBookByFilter } = require("../controllers/book.controller");
const router = express.Router();
const authMiddleware= require("../middleware/auth.middleware")


router.get("/user/:id", getUserById );

//Router book
router.get("/book", getBook);  //==> http://localhost:3000/get/book
router.get("/book/:id", authMiddleware, getBookById); // ==> http://localhost:3000/get/book/{id du livre}
router.get("/bookFilter/", authMiddleware, getBookByFilter); // ==> http://localhost:3000/get/bookFilter/?categories= {nom de la categorie}
module.exports = router;