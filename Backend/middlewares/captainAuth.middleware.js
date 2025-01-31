const captainModel = require("../models/captain.model");
const BlacklistedToken = require("../models/blackListedToken.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
	const token = req.header("Authorization")?.split(" ")[1] || req.cookies.token;
	const isBlacklisted = await BlacklistedToken.findOne({ token });
	if (isBlacklisted) {
		return res.status(401).json({ message: "Unauthorized" });
	}
	if (!token) {
		return res.status(401).json({ message: "Unauthorized" });
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const captain = await captainModel.findById(decoded._id);
		if (!captain) {
			return res.status(401).json({ message: "Unauthorized" });
		}
		req.captain = captain;
        next();
	} catch (error) {
		res.status(401).json({ message: error });
	}
}; // Token verification middleware
