const express = require("express");
const router = express.Router();
const postContent = require("../../controller/postController");

router.post("/post", postContent.authenticate, postContent.createPost);
router.get("/fetch", postContent.authenticate, postContent.fetchPosts);

module.exports = router;
