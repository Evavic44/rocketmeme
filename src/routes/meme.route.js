const express = require("express");
const router = express.Router();
const memeController = require("../controllers/meme.controller");
const auth = require("../middlewares/auth.middleware");
const verifyAdmin = require("../middlewares/verifyAdmin.middleware");

/**
 * @description     Get a list of memes with help of pagination
 * @access          public
 */
router.get("/", memeController.getMemes);

/**
 * @description     Get a list of popular memes, i.e top 15 downloaded memes
 * @access          public
 */
router.get("/popular", memeController.getPopularMemes);

/**
 * @description     Get a list of trending memes, i.e top 15 liked memes
 * @access          public
 */
router.get("/trending", memeController.getTrendingMemes);

/**
 * @description     Get a list of trending memes, i.e top 15 liked memes
 * @access          private
 * @todo            Implement middleware to make this private
 */
// router.post("/like", memeController.likeMeme); 

/**
 * @description     Get a list of trending memes, i.e top 15 liked memes
 * @access          public
 */
router.post("/download", memeController.updateMemeDownload);

/**
 * @description     Get a list of trending memes, i.e top 15 liked memes
 * @access          private
 * @todo            Implement middleware to make upload truly private
 */
router.post("/create", auth, verifyAdmin, memeController.createMeme);

module.exports = router;