const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain.controller");
const { body } = require("express-validator");
const captainAuthMiddleware = require("../middlewares/captainAuth.middleware");

router.post(
	"/register",
	[
		body("fullname.firstname")
			.isLength({ min: 3 })
			.withMessage("First name should be atleast 3 characters long"),
		body("email").isEmail().withMessage("Email is invalid"),
		body("password")
			.isLength({ min: 6 })
			.withMessage("Password should be atleast 6 characters long"),
		body("vehicleColor")
			.isLength({ min: 3 })
			.withMessage("Vehicle color should be atleast 3 characters long"),
		body("phone").isMobilePhone().withMessage("Phone number is invalid"),
		body("vehicleType")
			.isIn(["car", "bike", "auto"])
			.withMessage("Vehicle type is invalid"),
		body("passengerCapacity")
			.isNumeric()
			.withMessage("Passenger capacity should be a number"),
		body("numberPlate")
			.isLength({ min: 5 })
			.withMessage("Number plate should be atleast 5 characters long"),
	],
	captainController.registerCaptain
); // Register route

router.post("/login",captainController.loginCaptain); // Login route

router.post("/logout",captainAuthMiddleware,captainController.logoutCaptain); // Logout route

router.get("/profile",captainAuthMiddleware,captainController.getProfile); // Get profile route

module.exports = router;
