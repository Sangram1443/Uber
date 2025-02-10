import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserDataContext);
	const [error, setError] = useState("");

	const submitHandler = async (e) => {
		e.preventDefault();
		const newUser = {
			email: email,
			password: password,
		};
		setEmail("");
		setPassword("");
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_BASE_URL}/users/login`,
				newUser
			);
			if (response.status === 201) {
				const data = response.data;
				setUser(data.user);
				localStorage.setItem('token',data.token);
				navigate("/home");
			} else {
				setError(error.response?.data?.message || "User not found");
				return;
			}
		} catch (error) {
			setError(error.response?.data?.message || "User not found");
			return;
		}
	};

	return (
		<>
			<div className=" bg-[#eeeeee] p-7 pt-20 h-screen flex flex-col justify-between">
				<div>
					<img
						className="w-1/3 ml-5 absolute top-0 left-0"
						src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
						alt="uber logo"
					/>
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
						{error && <p className="text-red-500">{error}</p>}
						<button className="w-full mt-5 bg-[#000000] text-white py-2 rounded-md text-lg hover:bg-[#000000]">
							Login as User
						</button>
					</form>
					<p className="text-base py-2 px-2">
						Are you new here?
						<Link to={"/user-signup"} className="text-sky-500 pl-2">
							Create your account
						</Link>
					</p>
				</div>
				<div>
					<Link
						to={"/captain-login"}
						className="bg-emerald-600 flex justify-center border rounded-md p-2 w-full text-white text-lg"
					>
						Sign in as Captain
					</Link>
				</div>
			</div>
		</>
	);
};

export default UserLogin;
