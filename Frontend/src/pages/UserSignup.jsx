import React, { useState } from "react";

const UserSignup = () => {
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [error, setError] = useState("");

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			setError("Passwords do not match");
			return;
		}
		setError("");
	};

	return (
		<div className="bg-[#eeeeee] p-7 pt-20 h-screen flex flex-col justify-between">
			<div>
				<img
					className="w-1/3 ml-5 absolute top-0 left-0"
					src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
					alt="uber logo"
				/>
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

export default UserSignup;
