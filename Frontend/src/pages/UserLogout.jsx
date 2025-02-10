import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserLogout = () => {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

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

	return <>UserLogout</>;
};

export default UserLogout;
