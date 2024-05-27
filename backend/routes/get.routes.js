const express = require("express");
const { setPosts, userPosts, editPost, deletePost, likePost, dislikePost, getUser } = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getUser);

module.exports = router;