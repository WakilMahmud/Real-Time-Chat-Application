import { useState } from "react";

import SingleUser from "./SingleUser";
import ChatBox from "../ChatBox/ChatBox";
import Conversation from "../Conversation/Conversation";
import Navbar from "../../Shared/Navbar/Navbar";

const Users = ({ users }) => {
	const [directUser, setDirectUser] = useState("");

	// console.log(directUser);

	return (
		<>
			<Navbar>3. Chat Page</Navbar>
			<div className="lg:flex gap-1 justify-around bg-gray-200 h-[calc(100vh-92px)]">
				<Conversation directUser={directUser}></Conversation>
				<ChatBox targetUser={directUser}></ChatBox>
				<div className="w-full lg:w-3/5 flex flex-col items-start border border-gray-300">
					<h1 className="font-semibold text-xl px-4 py-2 border border-gray-300 w-full">Available Users</h1>
					<div className="w-full h-full">
						{users?.map((user, index) => (
							<SingleUser key={index} user={user} setDirectUser={setDirectUser}></SingleUser>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Users;
