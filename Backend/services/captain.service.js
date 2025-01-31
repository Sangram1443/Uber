const captainModel = require("../models/captain.model");
const BlacklistedToken = require("../models/blackListedToken.model");

module.exports.createCaptain = async ({
  fullname: { firstname, lastname },
  email,
  password,
  phone,
  vehicleType,
  vehicleColor,
  passengerCapacity,
  numberPlate,
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !phone ||
    !vehicleType ||
    !vehicleColor ||
    !passengerCapacity ||
    !numberPlate
  ) {
    throw new Error("All fields are required");
  }

  // Check if email already exists
  let emailExist = await captainModel.findOne({ email });
  if (emailExist) {
    throw new Error("Email already exists");
  }

  // Check if phone already exists
  let phoneExist = await captainModel.findOne({ phone });
  if (phoneExist) {
    throw new Error("Phone number already exists");
  }

  // Check if number plate already exists
  let numberPlateExist = await captainModel.findOne({ numberPlate });
  if (numberPlateExist) {
    throw new Error("Number plate already exists");
  }

  // If all checks pass, create the captain
  const captain = await captainModel.create({
    fullname: { firstname, lastname },
    email,
    password,
    phone,
    vehicleType,
    vehicleColor,
    passengerCapacity,
    numberPlate,
  });

  return captain;
}; // Create captain service

module.exports.blacklistToken = async (token) => {
  if (!token) {
    throw new Error("Token is required");
  }

  await BlacklistedToken.create({ token });
}; // Blacklist token service