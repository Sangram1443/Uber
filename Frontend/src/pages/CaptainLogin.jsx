import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { captain, setCaptain } = useContext(CaptainDataContext);
	const [error, setError] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();
		const newCaptain = {
			email: email,
			password: password,
		};
		try {
			axios
				.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, newCaptain)
				.then((response) => {
					if (response.status === 200) {
						const data = response.data;
						setCaptain(data.captain);
						localStorage.setItem("token", data.token);
						navigate("/captain-home");
					} else {
						setError(error.response?.data?.message || "Captain not found");
						return;
					}
				})
				.catch((error) => {
					setError(error.response?.data?.message || "Captain not found");
				});
			setEmail("");
			setPassword("");
		} catch (error) {
			setError(error.response?.data?.message || "Captain not found");
		}
	};

	return (
		<>
			<div className=" bg-[#eeeeee] p-7 pt-20 h-screen flex flex-col justify-between">
				<div>
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
					<form
						onSubmit={(e) => {
							submitHandler(e);
						}}
						className="mt-7"
					>
						<h3 className="text-2xl py-2 font-serif">What's your email ?</h3>
						<input
							className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
							type="email"
							required
							placeholder="email@example.com"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<h3 className="text-2xl py-2 font-serif">Your Password</h3>
						<input
							className="w-full py-2 px-3 border rounded-md bg-[#fefefe]"
							type="password"
							placeholder="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							required
						/>
						<p className="text-red-600">{error}</p>
						<button className="w-full mt-5 bg-emerald-600 text-white py-2 rounded-md text-lg hover:bg-[#000000]">
							Login as Captain
						</button>
					</form>
					<p className="text-base py-2 px-2">
						Are you new here?
						<Link to={"/captain-signup"} className="text-sky-500 pl-2">
							Register as Captain
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default CaptainLogin;
