import React from "react";
import { useState, useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CaptainSignup = () => {
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		confirmPassword: "",
		phone: "",
		vehicleType: "",
		vehicleColor: "",
		passengerCapacity: "",
		numberPlate: "",
	});
	const navigate = useNavigate();
	const { captain, setCaptain } = useContext(CaptainDataContext);
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const [error, setError] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			setError("Passwords do not match");
			return;
		}
		setError("");

		const newCaptain = {
			fullname: {
				firstname: formData.firstname,
				lastname: formData.lastname,
			},
			email: formData.email,
			password: formData.password,
			phone: formData.phone,
			vehicleType: formData.vehicleType,
			vehicleColor: formData.vehicleColor,
			passengerCapacity: formData.passengerCapacity,
			numberPlate: formData.numberPlate,
		};

		try {
			const response = await axios.post(
				`${import.meta.env.VITE_BASE_URL}/captains/register`,
				newCaptain
			);
			if (response.status === 200) {
				const data = response.data;
				setCaptain(data.captain);
				localStorage.setItem("token", data.token);
				navigate("/captain-home");
			} else {
				setError(error.response?.data?.message || "An error occurred");
			}
		} catch (error) {
			setError(error.response?.data?.message || "An error occurred");
		}
		setFormData({
			firstname: "",
			lastname: "",
			email: "",
			password: "",
			confirmPassword: "",
			phone: "",
			vehicleType: "",
			vehicleColor: "",
			passengerCapacity: "",
			numberPlate: "",
		});
	};

	return (
		<div className="bg-[#eeeeee] py-7 px-5 pt-20 h-screen flex flex-col  justify-between">
			<div className="overflow-scroll">
				<div className="flex flex-row gap-2 absolute top-0 left-0">
					<img
						className="ml-5 w-1/3"
						src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
						alt="uber logo"
					/>
					<img
						className="w-1/6"
						src="https://imgs.search.brave.com/lK8n0RWP1fmTWR8wo2bv0tY0ruQhU84hy-e7unSbiB0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2JsYWNrLXRh/eGktcG5nLW9wZW4t/MjAwMC5wbmc"
						alt="Car Logo"
					/>
				</div>

				<form className="mt-7" onSubmit={handleSubmit}>
					<div className="flex flex-row gap-2">
						<div className="w-1/2">
							<h3 className="text-2xl py-2 font-serif">First Name</h3>
							<input
								className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
								type="text"
								name="firstname"
								value={formData.firstname}
								onChange={handleChange}
								placeholder=""
								required
							/>
						</div>
						<div className="w-1/2">
							<h3 className="text-2xl py-2 font-serif">Last Name</h3>
							<input
								className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
								type="text"
								name="lastname"
								value={formData.lastname}
								onChange={handleChange}
								placeholder=""
							/>
						</div>
					</div>
					<h3 className="text-2xl py-2 font-serif">Email</h3>
					<input
						className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="email@example.com"
						required
					/>
					<h3 className="text-2xl py-2 font-serif">Phone Number</h3>
					<input
						className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
						type="number"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder=""
						required
					/>
					<div className="flex flex-row gap-2 items-center py-2">
						<h3 className="text-2xl py-2 font-serif">Vehicle Type</h3>
						<div className="flex flex-row gap-2 items-center">
							<input
								type="radio"
								id="auto"
								name="vehicleType"
								value="auto"
								checked={formData.vehicleType === "auto"}
								onChange={handleChange}
							/>
							<label htmlFor="auto">Auto</label>
						</div>
						<div className="flex flex-row gap-2 items-center">
							<input
								type="radio"
								id="bike"
								name="vehicleType"
								value="bike"
								checked={formData.vehicleType === "bike"}
								onChange={handleChange}
							/>
							<label htmlFor="bike">Bike</label>
						</div>
						<div className="flex flex-row gap-2 items-center">
							<input
								type="radio"
								id="car"
								name="vehicleType"
								value="car"
								checked={formData.vehicleType === "car"}
								onChange={handleChange}
							/>
							<label htmlFor="car">Car</label>
						</div>
					</div>
					<h3 className="text-2xl py-2 font-serif">Passenger Capacity</h3>
					<select
						className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
						name="passengerCapacity"
						value={formData.passengerCapacity}
						onChange={handleChange}
						required
					>
						<option value="">Select Capacity</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
					<div className="flex flex-row gap-2">
						<div className="w-1/2">
							<h3 className="text-2xl py-2 font-serif">Vehicle Color</h3>
							<input
								className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
								type="text"
								name="vehicleColor"
								value={formData.vehicleColor}
								onChange={handleChange}
								placeholder=""
								required
							/>
						</div>
						<div className="w-1/2">
							<h3 className="text-2xl py-2 font-serif">Number Plate</h3>
							<input
								className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
								type="text"
								name="numberPlate"
								value={formData.numberPlate}
								onChange={handleChange}
								placeholder=""
								required
							/>
						</div>
					</div>
					<h3 className="text-2xl py-2 font-serif">Password</h3>
					<input
						className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						placeholder="password"
						required
					/>
					<h3 className="text-2xl py-2 font-serif">Confirm Password</h3>
					<input
						className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
						type="password"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={handleChange}
						placeholder="password"
						required
					/>
					{error && <p className="text-red-500">{error}</p>}
					<button className="w-full mt-5 bg-emerald-600 text-white py-2 rounded-md text-lg hover:bg-[#000000]">
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default CaptainSignup;
