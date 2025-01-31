const mongoose = require("mongoose");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
	fullname: {
		firstname: {
			type: String,
			required: true,
			minlength: (3)["Name should be atleast 3 characters long"],
		},
		lastname: {
			type: String,
			minlength: (3)["Name should be atleast 3 characters long"],
		},
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
	socketId: {
		type: String,
	},
});

userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});
	return token;
};

userSchema.methods.comparePassword = async function (password) {
	return await bycrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
	return await bycrypt.hash(password, 10);
};

userSchema.methods.toJSON = function () {
	const user = this.toObject();
	delete user.password;
	return user;
}; // Remove password field from the response

const userModel = mongoose.model("User", userSchema); // users will be the collection name in the database
module.exports = userModel;
