const express = require("express");
const {  editPassword } = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { putStateBook, updatePages } = require("../controllers/book.controller");
const router = express.Router();

//Routes user
router.put("/user",authMiddleware ,editPassword);

//Routes book
router.put("/stateBook/:id", putStateBook);
router.put("/updatePage/:id", updatePages);

//“/book/:id” ⇒ [PUT] ⇒ Route permettant de modifier l’état du livre

module.exports = router;
