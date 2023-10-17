import { createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const useUser = () => {
	return useContext(UserContext);
};

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("User")));

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
