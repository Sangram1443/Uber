const userModel = require("../models/user.model");
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
		const user = await userModel.findById(decoded._id);
		if (!user) {
			return res.status(401).json({ message: "Unauthorized" });
		}
		req.user = user;
        next();
	} catch (error) {
		res.status(401).json({ message: error });
	}
};
