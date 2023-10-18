import { useState } from "react";

import SingleUser from "./SingleUser";
import ChatBox from "../ChatBox/ChatBox";

const Users = ({ users }) => {
	const [directUser, setDirectUser] = useState("");

	// console.log(directUser);

	return (
		<div className="lg:flex justify-around bg-gray-800 h-[calc(100vh-92px)] overflow-y-scroll">
			<div className="w-full lg:w-2/6 px-6 pt-4 flex flex-col items-start  overflow-y-scroll">
				<h1 className="font-semibold text-3xl text-green-300 mb-4">Users</h1>
				<div className="w-full h-full">
					{users?.map((user, index) => (
						<SingleUser key={index} user={user} setDirectUser={setDirectUser}></SingleUser>
					))}
				</div>
			</div>
			<ChatBox targetUser={directUser}></ChatBox>
		</div>
	);
};

export default Users;
