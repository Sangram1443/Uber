import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserLogout from "./pages/UserLogout";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainLogout from "./pages/CaptainLogout";
import CaptainSignup from "./pages/CaptainSignup";
import UserHome from "./pages/UserHome";
import CaptainHome from "./pages/CaptainHome";
import { UserDataContext } from "./context/UserContext";
import UserProtectWrapper from "./context/UserProtectWrapper";
import CaptainProtectWrapper from "./context/CaptainProtectWrapper";

const App = () => {
	const user = useContext(UserDataContext);
	return (
		<div>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/user-login" element={<UserLogin />} />
				<Route path="/user-signup" element={<UserSignup />} />
				<Route
					path="/user-logout"
					element={
						<UserProtectWrapper>
							<UserLogout />
						</UserProtectWrapper>
					}
				/>
				<Route
					path="/user-home"
					element={
						<UserProtectWrapper>
							<UserHome />
						</UserProtectWrapper>
					}
				/>

				<Route path="/captain-login" element={<CaptainLogin />} />
				<Route path="/captain-signup" element={<CaptainSignup />} />
				<Route
					path="/captain-logout"
					element={
						<CaptainProtectWrapper>
							<CaptainLogout />
						</CaptainProtectWrapper>
					}
				/>
				<Route
					path="/captain-home"
					element={
						<CaptainProtectWrapper>
							<CaptainHome />
						</CaptainProtectWrapper>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
