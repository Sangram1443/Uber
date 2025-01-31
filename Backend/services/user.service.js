const userModel = require("../models/user.model");
const BlacklistedToken = require("../models/blackListedToken.model");

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }

  // Check if the email already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new Error("Email is already registered");
  }

  const user = await userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
}; // Create user service

module.exports.blacklistToken = async (token) => {
  if (!token) {
    throw new Error("Token is required");
  }

  const blacklistedToken = await BlacklistedToken.create({ token });

  return blacklistedToken;
}; // Blacklist token service