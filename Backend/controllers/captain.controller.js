const captainModel = require("../models/captain.model");
const { validationResult } = require("express-validator");
const services = require("../services/captain.service");

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
		res.status(201).json({ token, captain });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
