import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserLogout = () => {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (!token) {
			navigate("/user-login");
		}
		axios
			.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				if (response.status === 200) {
					setIsLoading(false);
				}
			})
			.catch((error) => {
				console.error("Logout failed", error);
			});
	});

	useEffect(() => {
		const logout = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_API_URL}/users/logout`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				if (response.status === 200) {
					localStorage.removeItem("token");
					navigate("/user-login");
				}
			} catch (error) {
				console.error("Logout failed", error);
			}
		};

		logout();
	}, [token, navigate]);
	if (isLoading) {
		return <div>Loading...</div>;
	}
};

export default UserLogout;
