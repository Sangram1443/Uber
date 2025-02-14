import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!token) {
			navigate("/captain-login");
			return;
		}

		const checkProfile = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_BASE_URL}/captains/profile`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				if (response.status === 200) {
					setIsLoading(false);
				}
			} catch (error) {
				console.error("Profile check failed", error);
				navigate("/captain-login");
			}
		};

		checkProfile();
	}, [token, navigate]);

	useEffect(() => {
		const logout = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_API_URL}/captains/logout`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				if (response.status === 200) {
					localStorage.removeItem("token");
					navigate("/captain-login");
				}
			} catch (error) {
				console.error("Logout failed", error);
			}
		};

		if (!isLoading) {
			logout();
		}
	}, [token, navigate, isLoading]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return <div>CaptainLogout</div>;
};

export default CaptainLogout;
