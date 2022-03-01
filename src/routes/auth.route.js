const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const auth = require("../middlewares/auth.middleware");

/**
 * @description     Get a details of user
 * @access          Private
 */
router.get("/", auth, authController.getDetails);

/**
 * @description     signin user
 * @access          Public
 */
router.post("/login-google", authController.loginGoogle);

/**
 * @description     signup user
 * @access          Public
 */
router.post("/register-google", authController.registerGoogle);

/**
 * @description     signin user using github
 * @access          Public
 */
router.post("/login-github", authController.loginGithub);

/**
 * @description     signup user using github
 * @access          Public
 */
router.post("/register-github", authController.registerGithub);

module.exports = router;