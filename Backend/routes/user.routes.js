const express = require("express");
const router = express.Router();
const { body } = require("express-validator"); // Validate the request body before sending it to the controller
const userController = require("../controllers/user.controller");
const userAuthMiddleware = require("../middlewares/userAuth.middleware");

router.post(
	"/register",
	[
		body("fullname.firstname")
			.isLength({ min: 3 })
			.withMessage("Name should be atleast 3 characters long"),
		body("email").isEmail().withMessage("Invalid email address"),
		body("password")
			.isLength({ min: 6 })
			.withMessage("Password should be atleast 6 characters long"),
	],
	userController.registerUser
); // Register route

router.post(
	"/login",
	[
		body("email").isEmail().withMessage("Invalid email address"),
		body("password")
			.isLength({ min: 6 })
			.withMessage("Password should be atleast 6 characters long"),
	],
	userController.loginUser
); // Login route

router.get("/logout",userAuthMiddleware, userController.logoutUser); // Logout route	

router.get("/profile",userAuthMiddleware, userController.getUserProfile); // Get user profile route

module.exports = router;
