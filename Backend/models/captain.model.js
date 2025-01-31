const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema(
	{
		fullname: {
			firstname: {
				type: String,
				required: true,
			},
			lastname: {
				type: String,
			},
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			select: false,
		},
		phone: {
			type: String,
			required: true,
		},
		vehicleType: {
			type: String,
			enum: ["car", "bike", "auto"],
			required: true,
		},
		vehicleColor: {
			type: String,
			required: true,
		},
		passengerCapacity: {
			type: Number,
			required: true,
		},
		numberPlate: {
			type: String,
			required: true,
			unique: true,
		},
		status: {
			type: String,
			enum: ["available", "unavailable"],
			default: "unavailable",
		},
		socketId: {
			type: String,
			default: null,
		},
		location: {
			latitude: {
				type: Number,
				default: 0,
			},
			longitude: {
				type: Number,
				default: 0,
			},
		},
	},
	{
		timestamps: true,
	}
);

captainSchema.index({ location: "2dsphere" }); // for geospatial queries on location field of captain model (2dsphere is for spherical geometry)

captainSchema.methods.generateAuthToken = async function () {
	const captain = this;
	const token = jwt.sign({ _id: captain._id }, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});
	return token;
}; // This generates a token for every new captain that registers or logs in

captainSchema.statics.hashPassword = async function (password) {
	return await bcrypt.hash(password, 10);
}; // This creates a hash of the password for every new captain that registers

captainSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
}; // This compares the password entered by the captain with the hash stored in the database for every login attempt by the captain


captainSchema.methods.toJSON = function () {
    const captain = this;
    const captainObject = captain.toObject();
    delete captainObject.password;
    return captainObject;
  };// Remove password field from the response

const Captain = mongoose.model("Captain", captainSchema); // 'captains' will be the name of the collection

module.exports = Captain;
