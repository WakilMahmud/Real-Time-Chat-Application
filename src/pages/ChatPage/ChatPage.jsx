import { BACKEND_URL } from "../../api/api";
import { useEffect, useState } from "react";
import Users from "./Users/Users";

const ChatPage = () => {
	const [dbUsers, setDbUsers] = useState([]);
	useEffect(() => {
		fetch(`${BACKEND_URL}/api/Registration/users`)
			.then((res) => res.json())
			.then((data) => setDbUsers(data.users));
	}, []);

	return (
		<>
			<Users users={dbUsers}></Users>
		</>
	);
};

export default ChatPage;
