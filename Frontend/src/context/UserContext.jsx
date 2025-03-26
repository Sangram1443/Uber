import React, { createContext } from "react";
import { useState } from "react";
export const UserDataContext = createContext({});
const UserContext = ({ children }) => {
	const [user, setUser] = useState({
		email: "",
		// password: "",
		firstname: "",
		lastname: "",
	});

	return (
		<UserDataContext.Provider value={{ user, setUser }}>
			<div>{children}</div>
		</UserDataContext.Provider>
	);
};

export default UserContext;
