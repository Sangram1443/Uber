import React from "react";
import { useState, useEffect } from "react";

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
		console.log(formData);
	};

	return (
		<div className="bg-[#eeeeee] p-7 pt-20 h-screen flex flex-col  justify-between">
			<div className="overflow-scroll">
      <div className=" flex flex-row gap-2 absolute top-0 left-0">
						<img
							className="ml-5 w-1/3"
							src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
							alt="uber logo"
						/>
						<img
							className="w-1/6  "
							src="https://imgs.search.brave.com/lK8n0RWP1fmTWR8wo2bv0tY0ruQhU84hy-e7unSbiB0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2JsYWNrLXRh/eGktcG5nLW9wZW4t/MjAwMC5wbmc"
							alt="Car Logo"
						/>
					</div>

				<form className="mt-7" onSubmit={handleSubmit}>
					<h3 className="text-2xl p-2 font-serif">First Name</h3>
					<input
						className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
						type="text"
						name="firstname"
						value={formData.firstname}
						onChange={handleChange}
						placeholder=""
						required
					/>
					<h3 className="text-2xl p-2 font-serif">Last Name</h3>
					<input
						className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
						type="text"
						name="lastname"
						value={formData.lastname}
						onChange={handleChange}
						placeholder=""
					/>
					<h3 className="text-2xl p-2 font-serif">Email</h3>
					<input
						className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="email@example.com"
						required
					/>
					<h3 className="text-2xl p-2 font-serif">Phone Number</h3>
					<input
						className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
						type="number"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder=""
						required
					/>
					<h3 className="text-2xl p-2 font-serif">Vehicle Color</h3>
					<input
						className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
						type="text"
						name="vehicleColor"
						value={formData.vehicleColor}
						onChange={handleChange}
						placeholder=""
						required
					/>
					<h3 className="text-2xl p-2 font-serif">Passenger Capacity</h3>
					<input
						className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
						type="number"
						name="passengerCapacity"
						value={formData.passengerCapacity}
						onChange={handleChange}
						placeholder=""
						required
					/>
					<h3 className="text-2xl p-2 font-serif">Vehicle Number Plate</h3>
					<input
						className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
						type="text"
						name="numberPlate"
						value={formData.numberPlate}
						onChange={handleChange}
						placeholder=""
						required
					/>
					<h3 className="text-2xl p-2 font-serif">Password</h3>
					<input
						className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						placeholder="password"
						required
					/>
					<h3 className="text-2xl p-2 font-serif">Confirm Password</h3>
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
					<button className="w-full mt-5 bg-[#000000] text-white py-2 rounded-md text-lg hover:bg-[#000000]">
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default CaptainSignup;
