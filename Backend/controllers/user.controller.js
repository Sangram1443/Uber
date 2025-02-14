const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password } = req.body;
  const hashedPassword = await userModel.hashPassword(password);

  try {
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    const token = await user.generateAuthToken();
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; // Register user controller

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
	const user = await userModel.findOne({ email }).select("+password"); // Select password field explicitly
	if (!user) {
		return res.status(404).json({ message: "Invalid credentials" });
	}
	const isValid = await user.comparePassword(password);
	if (!isValid) {
		return res.status(400).json({ message: "Invalid credentials" });
	}
	const token = await user.generateAuthToken();
	res.status(201).json({ token, user });
}; // Login user controller

module.exports.logoutUser = async (req, res, next) => {
	const token = req.header("Authorization")?.split(" ")[1] || req.cookies.token;
	try {
		await userService.blacklistToken(token);
		res.clearCookie("token");
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
}; // Logout user controller

module.exports.getUserProfile = async (req, res, next) => {
	try {
		const user = await userModel.findById(req.user._id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}; // Get user profile controller
