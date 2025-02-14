const captainModel = require("../models/captain.model");
const { validationResult } = require("express-validator");
const services = require("../services/captain.service");
const captainService = require("../services/captain.service");

module.exports.registerCaptain = async (req, res) => {
	const error = validationResult(req);
	if (!error.isEmpty()) {
		return res.status(400).json({ errors: error.array() });
	}
	try {
		const {
			fullname: { firstname, lastname },
			email,
			password,
			phone,
			vehicleType,
			vehicleColor,
			passengerCapacity,
			numberPlate,
		} = req.body;

		const hashedPassword = await captainModel.hashPassword(password);

		const captain = await services.createCaptain({
			fullname: { firstname, lastname },
			email,
			password: hashedPassword,
			phone,
			vehicleType,
			vehicleColor,
			passengerCapacity,
			numberPlate,
		});
		const token = await captain.generateAuthToken();
		res.status(200).json({ token, captain : captain.toJSON() });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}; // Register captain controller

module.exports.loginCaptain = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ message: "Please enter all fields" });
		}

		const captain = await captainModel.findOne({email}).select("+password");
		if (!captain) {
			return res.status(404).json({ message: "Invalid credentials" });
		}
		const isMatch = captain.comparePassword(password);
		if (!isMatch) {
			return res.status(400).json({ message: "Invalid credentials" });
		}
		const token = await captain.generateAuthToken();
		res.status(200).json({ token, captain : captain.toJSON() });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}; // Login captain controller

module.exports.logoutCaptain = async (req, res) => {
	const token = req.header("Authorization")?.split(" ")[1] || req.cookies.token;
		try {
			await captainService.blacklistToken(token);
			res.clearCookie("token");
			res.status(200).json({ message: "Logged out successfully" });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
}; // Logout captain controller

module.exports.getProfile = async (req, res) => {
	try {
		const captain = await captainModel.findById(req.captain._id).select("-password");
		if (!captain) {
			return res.status(404).json({ message: "Captain not found" });
		}
		res.status(200).json(captain);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}; // Get profile controller